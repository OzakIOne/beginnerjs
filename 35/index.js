const TOS = document.querySelector('.TOS');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

const obCall = (payload) => {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    ob.unobserve(TOS.lastElementChild);
  }
};

const ob = new IntersectionObserver(obCall, {
  root: TOS,
  threshold: 1,
});

ob.observe(TOS.lastElementChild);
