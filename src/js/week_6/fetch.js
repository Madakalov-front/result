export const fetchQuest = () => {
    const loader = () => {
        return document.querySelector('#loader');
    }

    const arrayId = () => {
        return [1, 3, 9, 6, 7]
    }
    const createItemUser = (nameUser) => {
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

        const response = arrayId().map(async id => {
            return fetch(`${URL}/${id}`).then(response => response.json())
                .then(data => createItemUser(data.name))
                .catch(error => console.error(error))
                .finally(() => {
                    loader().hidden = true
                })
        })

        return Promise.all(response);
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

        li.append(img, h3);

        return li;
    }

    const getFastestLoadedPhoto = async (arr) => {
        loader().hidden = false;
        const URL = 'https://api.slingacademy.com/v1/sample-data/photos';
        const response = arr.map(async id => {
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
        document.querySelector('#data-container').appendChild(createPhotoItem(url, title))
    }
    renderFastPhoto()
}