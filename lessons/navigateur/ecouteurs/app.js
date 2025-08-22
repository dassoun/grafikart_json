document.querySelector('form').addEventListener('submit', (e) => {
    const form = e.currentTarget
    const data = new FormData(form)
    const firstname = data.get('firstname')
    if (firstname.length < 2) {
        e.preventDefault()
    }
})

// document.querySelector('input')
// .addEventListener('change', (e) => {
//     console.log('change')
// })
// document.querySelector('input')
// .addEventListener('input', (e) => {
//     console.log('input', e.currentTarget.value)
// })

// document.querySelector('input')
// .addEventListener('change', (e) => {
//     console.log('checkbox', e.currentTarget.checked)
// })

// document.querySelector('select')
// .addEventListener('change', (e) => {
//     console.log('select', e.currentTarget.value)
// })
document.querySelector('select')
.addEventListener('change', (e) => {
    console.log(
        Array.from(e.currentTarget.selectedOptions)
            .map(option => option.value)
    )
})

const spoilers = document.querySelectorAll('.spoiler')
console.log(spoilers)
for (const spoiler of Array.from(spoilers)) {
    spoiler.addEventListener('click', (e) => {
        console.log(spoiler.innerText)
        spoiler.classList.remove('spoiler')
    })
}