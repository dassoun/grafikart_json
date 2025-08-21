/**
 * Crée un élément html représentant un article
 * @param {{title: string, body: string}} post 
 * @returns {HTMLElement}
 */
function createArticle(post) {
    const article = document.createElement('article')
    article.append(createElementWithText('h2', post.title))
    article.append(createElementWithText('p', post.body))

    return article
}

function createElementWithText(tagName, content) {
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}

async function main() {
    const wrapper = document.querySelector('#lastPosts')
    const loader = document.createElement('p')

    loader.innerText = 'Chargement...'
    wrapper.append(loader)

    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
            method: "GET",
            headers: {
                "Accept": "application/json",
            }
        })
        if (!r.ok) {
            throw new Error('Erreur serveur')
        }

        const posts = await r.json()
        loader.remove()
        for (let post of posts) {
            wrapper.append(createArticle(post))
        }

    } catch(e) {
        loader.innerText = 'Impossible de charger les articles'
        loader.style.color = 'red'
        return
    }
}

main()
