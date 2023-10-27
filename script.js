const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

menuBtn.addEventListener('click', () => {
    // we can dynamically add a class using classList and the toggle method dynamically alters the presence of the class in the class list
    menuBtn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})