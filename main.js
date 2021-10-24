let share = document.querySelector('.footer .share i');
let shareMenu = document.querySelector('.share-menu');
let shareArr = document.querySelector('.footer .share::before');
share.addEventListener('click', function () {
    shareMenu.classList.toggle('active');
    share.classList.toggle('active')
});
document.addEventListener('click', function (e) {
    if (e.target !== share) {
        shareMenu.classList.remove('active')
    }
})