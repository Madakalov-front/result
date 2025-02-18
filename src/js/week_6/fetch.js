export const fetchQuest = () => {
    const loader = () => {
        return document.querySelector('#loader');
    }

    const arrayId = () => {
        return [1, 3, 9, 6, 55]
    }
    const createItemUser = (nameUser) => {
        console.log(nameUser)
        const elListItem = document.createElement('li');
        const elLinkItem = document.createElement('a');
        elLinkItem.textContent = nameUser;
        elLinkItem.href = '#'
        elListItem.appendChild(elLinkItem)

        return elListItem
    }

    const getAllUser = async () => {
        loader().hidden = false;

        const URL = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(URL)

        try {

            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`)
            }

            const users = await response.json();

            if (!Array.isArray(users)) {
                throw new Error(`Not array: ${users}`)
            }

            // const listUsers = arrayId().map(item => {
            //     const user = users.find(user => user.id === item)
            //     if(!user) return ''
            //     return createItemUser(user.name)
            // })
            // преимуществ перед своим подходом думаю нет, т.к. один запрос идет.

            const listUsers = Promise.all(
                arrayId().map(id => {
                    const user = users.find( user => user.id === id)
                    return user ? createItemUser(user.name) : '';
                })
            )

            return listUsers;

        } catch (error) {
            console.error("Произошла ошибка:", error.message);
            return [];
        } finally {
            loader().hidden = true
        }
    }

    const renderListUsers = async () => {
        const listUsers = await getAllUser()
        document.querySelector('#data-container').append(...listUsers)
    }

    renderListUsers()
}


export const fastFetchPhoto = () => {
    
const loader = () => {
    return document.querySelector('#loader');
}

const arr = () => {
    return [60, 12, 55, 33, 48, 88];
}

const createPhotoItem = (url, title) => {
    const li = document.createElement("li");
    li.classList.add("photo-item");

    const img = document.createElement("img");
    img.classList.add("photo-item__image");
    img.src = url;
    img.alt = title;

    const h3 = document.createElement("h3");
    h3.classList.add("photo-item__title");
    h3.textContent = title;

    li.appendChild(img);
    li.appendChild(h3);

    return li;
}

const getFastestLoadedPhoto = async (arr) => {
    loader().hidden = false;
    const URL = 'https://api.slingacademy.com/v1/sample-data/photos';
    const response = arr.map(id => {
        return fetch(`${URL}/${id}`)
            .then(response => response.json())
            .then(data => data.photo)
            .catch(error => console.error(error))
            .finally(() => {
                loader().hidden = true
            })
    });
    return Promise.race(response)
}

const renderFastPhoto = async () => {
    const { title, url } = await getFastestLoadedPhoto(arr())
    console.log(title, url)
    document.querySelector('#data-container').appendChild(createPhotoItem(url, title))
}
renderFastPhoto()
}