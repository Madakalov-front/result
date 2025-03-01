const getUrlPosts = () => `https://jsonplaceholder.typicode.com/posts`;

const getUrlComments = () => `https://jsonplaceholder.typicode.com/comments`;


const createElement = ({ tagName = 'div', className = '', textContent = '', parent = null } = {}) => {
    const elemTitle = document.createElement(tagName);
    elemTitle.className = className || '';
    elemTitle.textContent = textContent || '';
    parent?.appendChild(elemTitle)
    return elemTitle;
}

const renderCommentPost = ({ arrayComments = [], parentElem = '' }) => {
    const containerComments = createElement({ tagName: 'div', className: 'post-post__comments', parent: parentElem })
    arrayComments.forEach(comment => {
        const itemComments = createElement({ tagName: 'div', className: 'post-comment', parent: containerComments })
        createElement({ tagName: 'span', className: 'post-comment__author', textContent: comment.email, parent: itemComments })
        createElement({ tagName: 'span', className: 'post-comment__text', textContent: comment.body, parent: itemComments })
    })
    return containerComments;
}

const renderPost = async (idPost) => {
    const containerPosts = document.querySelector(".posts") || createElement({ tagName: 'div', className: 'posts', parent: document.body })
    const loader = createElement({tagName: 'div', className: 'loader', parent: containerPosts})

    const elemPost = createElement({ tagName: 'div', className: "post", parent: containerPosts });
    elemPost.id = `post-${idPost}`
    try {
        const responses = await Promise.all([
            fetch(`${getUrlPosts()}/${idPost}`),
            fetch(`${getUrlComments()}/?postId=${idPost}`)
        ])
        const errorResponse = responses.find(response => !response.ok);
        if (errorResponse) {
            throw new Error(`Error HTTP: ${errorResponse.status} - ${errorResponse.statusText}`);
        }

        let [bodyPost, commentsPost] = await Promise.all(responses.map(res => res.json()));

        createElement({ tagName: 'h1', className: 'post__title', textContent: bodyPost.title, parent: elemPost });
        createElement({ tagName: 'p', className: 'post__text', textContent: bodyPost.body, parent: elemPost });
        createElement({ tagName: 'b', className: 'post__comments-text', textContent: 'Комментарии', parent: elemPost });
        renderCommentPost({ arrayComments: commentsPost, parentElem: elemPost })

        return [bodyPost, commentsPost];
        
    } catch (error) {
        console.error(error)

    } finally {
        loader.remove()
    }
}

renderPost(22)
renderPost(33)
renderPost(12)