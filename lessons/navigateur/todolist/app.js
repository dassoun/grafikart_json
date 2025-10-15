
// /**
//  * Crée un élément html représentant un article
//  * @param {id: number, title: string, completed: boolean} Todo
//  * @returns {HTMLElement}
//  */
// function createTodo(todo) {
//     const element = document.createElement('li')
//     element.classList.add("todo", "list-group-item", "d-flex", "align-items-center");
//     element.innerHTML = 
// `<input class="form-check-input" type="checkbox" id="todo-${todo.id}">
// <label class="ms-2 form-check-label" for="todo-${todo.id}">
//     ${todo.title}
// </label>
// <label class="ms-auto btn btn-danger btn-sm">
// <i class="bi-trash">
// </i>
// </label>`

//     return element
// }

// async function main() {
//     const wrapper = document.querySelector('ul')

//     try {
//         const r = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
//             method: "GET",
//             headers: {
//                 "Accept": "application/json",
//             }
//         })
//         if (!r.ok) {
//             throw new Error('Erreur serveur')
//         }

//         const todos = await r.json()
//         console.log(todos)

//         for (let todo of todos) {
//             wrapper.append(createTodo(todo))
//         }

//     } catch(e) {
//         console.log('Impossible de joindre le serveur')
//         return
//     }
// }

// main()

import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))

    console.log(todos)
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les éléments'
    document.body.prepend(alertElement)
    console.error(e)
}