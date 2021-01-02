let search = document.querySelector('.search');
let language = document.querySelector('.language');
let pop = document.querySelector('.pop__up');


document.querySelector('.iconSearch').onclick = function () {
    search.classList.add('onclick');

    language.classList.add('remove');

    this.classList.add('remove');
}
document.querySelector('.close').onclick = function () {
    search.classList.remove('onclick');

    document.querySelector('.iconSearch').classList.remove('remove')
    language.classList.remove('remove');
}

document.querySelector('.all').onclick = function () {
    pop.classList.add('pop');
}
document.querySelector('.pop__close').onclick = function () {
    pop.classList.remove('pop');
}