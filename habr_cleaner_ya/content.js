// Элементы, которые можно удалить
const elementsToRemove = [
    'aside', // Боковая панель
    '.tm-header',
    '.tm-page-progress-bar',
    '.tm-base-layout__header_is-sticky',
    '.tm-company-profile-card',
    '.tm-article-presenter__footer',
    '.tm-scroll-top',
    '.tm-article-sticky-panel',
    '.tm-footer-menu',
    '.tm-article-snippet__stats',
    '.tm-article-labels',
    '.tm-company-card', // Карточки компаний
    '.tm-article-snippet__hubs', // Хабры в превью статей
    '.tm-footer', // Футер
    '.tm-page__sidebar', // Правая боковая панель
    '.tm-article-presentation__footer', // Футер статьи
    '.tm-article-comments-counter', // Счетчик комментариев
    '.tm-page-article__related', // Похожие статьи
    '.tm-page-article__subscribe', // Блок подписки
    '.tm-page-article__advertisement', // Рекламные блоки
    '.tm-article-snippet__read-more', // Кнопка "Читать далее"
    '.tm-article-snippet__meta', // Мета-информация в превью
    '.tm-page-article__buttons', // Кнопки соцсетей
    '.tm-user-actions__menu', // Меню пользователя
    '.tm-header__dropdown-menu', // Выпадающие меню в шапке
    '.tm-page-article__badges' // Бейджи статьи
  ];
  
  // Функция для удаления элементов
  function cleanHabr() {
    elementsToRemove.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        element.remove();
      });
    });
  
    // Опционально: расширяем основное содержимое
    const mainContent = document.querySelector('.tm-page__main');
    if (mainContent) {
      mainContent.style.maxWidth = '100%';
      mainContent.style.margin = '0 auto';
      mainContent.style.padding = '20px';
    }
  }
  
  // Запускаем очистку при загрузке страницы
  cleanHabr();
  
  // Также запускаем при изменениях DOM (для SPA-поведения)
  const observer = new MutationObserver(cleanHabr);
  observer.observe(document.body, { childList: true, subtree: true });

  document.querySelectorAll('.spoiler').forEach(function(spoiler) {
    spoiler.setAttribute('open', 'true');
});
