// Конфигурация - добавьте сюда селекторы элементов для удаления
// В коде найдите:
//      Для классов: .class-name
//      Для ID: #element-id
//      Для атрибутов: [data-attr="value"]
const ELEMENTS_TO_REMOVE = [
    '.header',
    '#mobile-menu',
    '#main-menu',
    '#thirdinary',
    '#comments',
    // '.social-likes social-likes_visible social-likes_ready',
    '.social-likes',
    '#footer'
    // Примеры:
    // '.ad-class',
    // '#banner-id',
    // 'div[data-test="promo"]',
    // '.sidebar-widget',
    // '.newsletter-popup'
];

function removeElements() {
    let removedCount = 0;
    
    ELEMENTS_TO_REMOVE.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.remove();
            removedCount++;
            console.log(`Удален элемент: ${selector}`);
        });
    });
    
    // Покажем уведомление о результате
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '10px 20px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '9999';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.textContent = `Удалено элементов: ${removedCount}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Запускаем очистку
removeElements();