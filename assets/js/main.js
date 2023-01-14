/**
 * Функционал слайдеров.
 */
const initSliders = () => {
  new Swiper('.js-frontslider', {
    autoHeight: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      prevEl: ".js-frontslider .ctrl--prev",
      nextEl: ".js-frontslider .ctrl--next",
    },
    pagination: false,
  });

  document.querySelectorAll('.js-tabsslider').forEach(elem => {
    new Swiper(elem, {
      autoHeight: false,
      loop: false,
      spaceBetween: 20,
      slidesPerView: 3,
      navigation: {
        prevEl: elem.parentElement.querySelector('.ctrl--prev'),
        nextEl: elem.parentElement.querySelector('.ctrl--next'),
      },
      pagination: false,
    });
  })

};
initSliders();



/**
 * Функционал табов.
 */
function getCookie(name) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)',
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
const initCookieTabs = (tabName, wrapper) => {
  wrapper.querySelectorAll('[data-tab]').forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === tabName);
  });
  wrapper.querySelectorAll('[data-tablink]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.tablink === tabName);
  });
};
const startTabs = () => {
  if (document.querySelector('[data-cookietab]')) {
    const savedActiveTab = getCookie('activeTab');
    if (savedActiveTab) initCookieTabs(savedActiveTab, document);
  }
  document.addEventListener('click', (e) => {
    const tabLink = e.target.closest('[data-tablink]');
    const wrapper = e.target.closest('[data-tabwrap]');
    if (!tabLink || !wrapper) return;
    initCookieTabs(tabLink.dataset.tablink, wrapper);
    const activeTab = document.querySelector('.is-active[data-cookietab][data-tab]');
    if (!activeTab || !activeTab.dataset.cookietab) return;
    document.cookie = `activeTab=${activeTab.dataset.tab}; max-age=6000000`;
  });
};
startTabs();
