const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

const handleClick = (e) => {
  const { id } = e.currentTarget;

  tabPanels.forEach((panel) => (panel.hidden = true));
  tabButtons.forEach((tabBtn) => tabBtn.setAttribute('aria-selected', false));
  e.currentTarget.setAttribute('aria-selected', true);
  [...tabPanels].find(
    (panel) => panel.getAttribute('aria-labelledby') === id,
  ).hidden = false;
};

tabButtons.forEach((element) =>
  element.addEventListener('click', (e) => handleClick(e)),
);
