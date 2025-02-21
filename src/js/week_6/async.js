const quest_1 = () => {
    const getUrl = () => {
        return "https://jsonplaceholder.typicode.com/posts";
    }
    let isLoading = false;
    const createNewPost = async (url) => {
        isLoading = true;
        try {
            const response = await fetch(url, {
                method: 'POST'
            });
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }
            const result = await response.json()
            console.log(result)
            return result;
        } catch (error) {
            console.error(error)
        } finally {
            isLoading = false;
        }

    };
    createNewPost(getUrl());
}

const quest_2 = () => {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
    const getTodosByIds = async (ids) => {
        const requests = ids.map( async (id) => fetch(`${TODOS_URL}/${id}`));
        try {
            const response = await Promise.all(requests);
            if (!response.every(response => response.ok)) {
                throw new Error(`Error HTTP: ${response.find(response => !response.ok).status}`)
            }
            const dataResults = response.map(async (data) => data.json())
            const allTasks = await Promise.all(dataResults);
            console.log(allTasks)
        } catch (error) {
            console.error(error);
        } finally {
            console.log('end')
        }
    }
    getTodosByIds([43, 21, 55, 100, 10]);
}

const quest_3 = () => {
    const getUrl = () => {
        return `https://jsonplaceholder.typicode.com/albums`
    }
    
    const renderContainerList = () => {
        const elemOl = document.createElement('ol');
        elemOl.classList.add('data-container');
        return elemOl;
    }
    
    const renderListItem = (title) => {
        const elemLi = document.createElement('li');
        elemLi.textContent = title;
        return elemLi;
    }
    
    const loader = () => {
        const elemSpan = document.createElement('span');
        elemSpan.textContent = 'Loader...';
        elemSpan.hidden = true;
        return elemSpan;
    }
    
    const renderAlbums = async (url, itemList, container, loader) => {
        const elemLoader = loader();
        const elemOl = container();
        document.body.append(elemLoader, elemOl)
        try {
            elemLoader.hidden = false;
            const response = await fetch(url());
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }
            const data = await response.json();
            data.map(album => {
                const elemLi = itemList(album.title)
                elemOl.append(elemLi)
            })
        } catch (error) {
            elemOl.textContent = 'Произошла ошибка в получении данных об альбомах...';
            console.error(error);
        } finally {
            elemLoader.hidden = true;
            console.log('End!')
        }
    }
    
    renderAlbums(getUrl, renderListItem, renderContainerList, loader)
}