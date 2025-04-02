
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
    '.banner-wrapper',
    '.overlays',
    '.tm-article-snippet__meta-container',
    '.tm-article-snippet__stats',
    '.tm-article-presenter__origin',
    '.tm-publication-hubs__container',
    '.tm-article-labels',
    '.article-donation-block',
    'tm-company-profile-card tm-company-article__profile-card',
    'tm-company-article__profile-card',
    'tm-company-profile-card',
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
