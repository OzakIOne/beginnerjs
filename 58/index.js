function Gallery(gallery) {
  if (!gallery) throw new Error('No gallery found');
  const images = [...gallery.querySelectorAll('img')];
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;
  function openModal() {
    if (modal.matches('.open')) return;

    modal.classList.add('open');
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPreviousImage);
    window.addEventListener('keyup', handleKey);
  }
  function closeModal() {
    modal.classList.remove('open');
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
    window.removeEventListener('keyup', handleKey);
  }
  function handleClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }
  const handleKey = (e) => {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPreviousImage();
  };
  const showNextImage = () =>
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  const showPreviousImage = () =>
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);

  function showImage(el) {
    if (!el) {
      return;
    }
    console.log(el);
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  images.forEach((image) => {
    image.addEventListener('click', (e) => showImage(e.currentTarget));
    image.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') showImage(e.currentTarget);
    });
  });
  modal.addEventListener('click', handleClick);
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
