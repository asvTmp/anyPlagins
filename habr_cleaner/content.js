
const stringArray = [
    '.tm-header', 
    '.tm-page-progress-bar', 
    '.tm-scroll-top', 
    '.tm-base-layout__header_is-sticky tm-base-layout__header', 
    '.tm-base-layout__header_is-sticky',
    '.tm-base-layout__header',
    '.tm-adfox-banner__container', 
    '.pull-down__header', 
    '.tm-page__sidebar', 
    '.tm-article-presenter__footer', 
    '.tm-footer-menu', 
    '.tm-article-sticky-panel',
    '.tm-scroll-top',
    '.tm-footer'
];

stringArray.forEach((item) => {
    pole = document.querySelector(item);
    if (pole)
        pole.remove();
});


document.querySelectorAll('.spoiler').forEach(function(spoiler) {
    spoiler.setAttribute('open', 'true');
});
