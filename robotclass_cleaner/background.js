chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('robotclass.ru')) {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      });
    } else {
      chrome.action.setTitle({
        tabId: tab.id,
        title: 'Работает только на robotclass.ru'
      });
    }
  });