// Card Stack section for Hero's //
document.querySelectorAll('.cards').forEach((stack) => {
  stack.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => {
      stack.appendChild(img); // Moves clicked img to the end //
      // Reset z-index based on new order //
      [...stack.children].forEach((img, i, arr) => {
        img.style.zIndex = arr.length - i;
        img.style.transform = `translate(${i * 5}px, ${i * 5}px)`;
      });
    });
  });
});

//* Card Flipping Action *//
function flipCard(card) {
  card.classList.toggle('flipped');
}
