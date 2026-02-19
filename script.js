document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html');

  const ruMessages = {
    layoutTxt: 'Верстка',
    layoutDesc: 'Создание страницы по шаблону, HTML / CSS',
    resposiveTxt: 'Адаптив', 
    resposiveDesc: 'Оптимизирован под разные устройства', 
    hostingTxt: 'Хостинг', 
    hostingDesc: 'Сайт был загружен на хостинг',
    phpTxt: 'PHP', 
    phpDesc: 'Программирование функций PHP',
    jsTxt: 'JavaScript', 
    jsDesc: 'Программирование функций JavaScript',
    jslibTxt: 'JS-lib', 
    jslibDesc: 'Используются библиотеки JavaScript',
    ymapTxt: 'YMap', 
    ymapDesc: 'Подключена карта Яндекс',
    jsAPITxt: 'API', 
    jsAPIDesc: 'Запрашивание данных через JS fetch()',
    localstorageTxt: 'LocalStorage', 
    localstorageDesc: 'Используется локальное хранилище браузера',
    greensockTxt: 'GreenSock', 
    greensockDesc: 'Анимации GreenSock',
    bootstrapTxt: 'Bootstrap', 
    bootstrapDesc: 'Верстка при помощи Bootstrap',
  };

  const enMessages = {
    layoutTxt: 'Layout',
    layoutDesc: 'HTML / CSS',
    resposiveTxt: 'Responsive', 
    resposiveDesc: 'Layout is optimised for different devices', 
    hostingTxt: 'Hosting', 
    hostingDesc: 'Was hosted on a real server',
    phpTxt: 'PHP', 
    phpDesc: 'Has server-side functions',
    jsTxt: 'JavaScript', 
    jsDesc: 'JavaScript programming',
    jslibTxt: 'JS-lib', 
    jslibDesc: 'Usage of other JS libraries',
    ymapTxt: 'YMap', 
    ymapDesc: 'Yandex map is linked',
    jsAPITxt: 'API', 
    jsAPIDesc: 'Getting data with JS fetch()',
    localstorageTxt: 'LocalStorage', 
    localstorageDesc: 'Saves data locally in Browser',
    greensockTxt: 'GreenSock', 
    greensockDesc: 'GreenSock animations',
    bootstrapTxt: 'Bootstrap', 
    bootstrapDesc: 'Made using BootStrap',
  };

  let messages = {};
  messages = ruMessages;

  loadTags();
  function loadTags() {
    // place text, attr
    function initTag(elementHTML, elementText, ElementDescription) {
      elementHTML.innerHTML = elementText;
      elementHTML.setAttribute('description', ElementDescription);
    };

    // tags
    const tagsLayout = document.querySelectorAll('.tag-layout');
    tagsLayout.forEach(element => {
      initTag(element, messages.layoutTxt, messages.layoutDesc)
    });
    
    const tagsResposive = document.querySelectorAll('.tag-responsive');
    tagsResposive.forEach(element => {
      initTag(element, messages.resposiveTxt, messages.resposiveDesc)
    });

    const tagsServer = document.querySelectorAll('.tag-server');
    tagsServer.forEach(element => {
      initTag(element, messages.hostingTxt, messages.hostingDesc)
    });

    const tagsPHP = document.querySelectorAll('.tag-php');
    tagsPHP.forEach(element => {
      initTag(element, messages.phpTxt, messages.phpDesc)
    });

    const tagsJs = document.querySelectorAll('.tag-js');
    tagsJs.forEach(element => {
      initTag(element, messages.jsTxt, messages.jsDesc)
    });

    const tagsJsLibraries = document.querySelectorAll('.tag-jslib');
    tagsJsLibraries.forEach(element => {
      initTag(element, messages.jslibTxt, messages.jslibDesc)
    });

    const tagsYmap = document.querySelectorAll('.tag-ymap');
    tagsYmap.forEach(element => {
      initTag(element, messages.ymapTxt, messages.ymapDesc)
    });

    const jsAPI = document.querySelectorAll('.tag-api');
    jsAPI.forEach(element => {
      initTag(element, messages.jsAPITxt, messages.jsAPIDesc)
    });

    const jsLocalStorage = document.querySelectorAll('.tag-localstorage');
    jsLocalStorage.forEach(element => {
      initTag(element, messages.localstorageTxt, messages.localstorageDesc)
    });

    const jsGreensock = document.querySelectorAll('.tag-greensock');
    jsGreensock.forEach(element => {
      initTag(element, messages.greensockTxt, messages.greensockDesc)
    });

    const jsBootstrap = document.querySelectorAll('.tag-bootstrap');
    jsBootstrap.forEach(element => {
      initTag(element, messages.bootstrapTxt, messages.bootstrapDesc)
    });
  };

  function switchLanguage() {
    console.log('swithch lang')
    if (html.classList.contains('--en')) {
      html.classList.remove('--en');
      messages = ruMessages;
      loadTags();
    } else {
      html.classList.add('--en');
      messages = enMessages;
      loadTags();
    };
  };
  const langSwitchBtns = document.querySelectorAll('a[href="#swithLanguage"]');
  langSwitchBtns.forEach(element => {
    element.addEventListener('click', function(e) {
      // e.preventFefault();
      switchLanguage();
    });
  });

  swithTheme();
  function swithTheme() {
    const setToDark = document.querySelector('.main__settings-item-darktheme');
    const setToLight = document.querySelector('.main__settings-item-lighttheme');

    setToDark.addEventListener('click', () => {
      html.classList.remove('--lighttheme');
      html.classList.add('--darktheme');
    });
    setToLight.addEventListener('click', () => {
      html.classList.remove('--darktheme');
      html.classList.add('--lighttheme');
    });
  };

  mobileNavigator();
  function mobileNavigator() {
    const btnElem = document.querySelector('.content-aside-mobile');
    const menuElem= document.querySelector('.content-aside-sticky');
    const menuLinks = document.querySelectorAll('.content-aside-sticky a');
    
    btnElem.addEventListener('click', () => {
      menuElem.classList.toggle('--show');
    });
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', () => {
        menuElem.classList.remove('--show');
      });
    });
  };
});