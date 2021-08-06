const searchIcon = document.querySelector('.header__search-icon--in-actions')
const searchBox = document.querySelector('.header__search-box--dropdown')

searchIcon.addEventListener('click', () => {
  searchBox.classList.toggle('header__search-box--active')
})
