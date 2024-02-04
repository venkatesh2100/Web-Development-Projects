const toggle = document.querySelector('.toggle')
const navbar = document.querySelector('.navbar')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navbar.classList.toggle('active')
})