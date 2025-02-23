const getUrlPosts = () => {
    return `https://jsonplaceholder.typicode.com/posts`;
}
const getUrlComments = () => {
    return `https://jsonplaceholder.typicode.com/comments`;
}


const createElement = ({ tagName = 'div', className = '', textContent = '', parent = null } = {}) => {
    const elemTitle = document.createElement(tagName);
    elemTitle.className = className || '';
    elemTitle.textContent = textContent || '';
    parent?.appendChild(elemTitle)
    return elemTitle;
}

const renderCommentPost = (arrayComments) => {
    const containerComments = createElement({ tagName: 'div', className: 'post-post__comments' })
    arrayComments.forEach(comment => {
        const itemComments = createElement({ tagName: 'div', className: 'post-comment', textContent: '', parent: containerComments })
        createElement({ tagName: 'span', className: 'post-comment__author', textContent: comment.email, parent: itemComments })
        createElement({ tagName: 'span', className: 'post-comment__text', textContent: comment.body, parent: itemComments })
    })
    return containerComments;
}

const renderPost = async (idPost) => {
    const elemPost = document.createElement('div');
    elemPost.id = 'post'
    elemPost.classList.add('post');
    try {
        console.log('start')
        const responses = await Promise.all([
            fetch(`${getUrlPosts()}/${idPost}`),
            fetch(`${getUrlComments()}/?postId=${idPost}`)
        ])

        const errorResponse = responses.find(response => !response.ok);
        if (errorResponse) {
            throw new Error(`Error HTTP: ${errorResponse.status}, ${errorResponse}`);
        }

        let [bodyPost, commentsPost] = await Promise.all(responses.map(res => res.json()));

        createElement({ tagName: 'h1', className: 'post__title', textContent: bodyPost.title, parent: elemPost });
        createElement({ tagName: 'p', className: 'post__text', textContent: bodyPost.body, parent: elemPost });
        createElement({ tagName: 'b', className: 'post__comments-text', textContent: 'Комментарии', parent: elemPost });
        elemPost.appendChild(renderCommentPost(commentsPost))
        document.body.prepend(elemPost)

        return [bodyPost, commentsPost];
    } catch (error) {
        console.error(error)

    } finally {
        console.log('end')
    }
}

renderPost(22)