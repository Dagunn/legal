const cardBody = document.querySelector('.card__body');
const textElement = document.querySelector('.card__body-text');
const arrowButton = document.querySelector('.card__body-arrow');

arrowButton.addEventListener('click', () => {
  const isExpanded = cardBody.classList.contains('card__body--expanded');
  arrowButton.classList.toggle('rotate');
  if (isExpanded) {

    cardBody.style.height = `${cardBody.scrollHeight}px`;
    setTimeout(() => {
      cardBody.style.height = '8em';
    }, 0);
  } else {

    const fullHeight = textElement.scrollHeight;
    cardBody.style.height = `${fullHeight}px`;
  }

  cardBody.classList.toggle('card__body--expanded');
});
