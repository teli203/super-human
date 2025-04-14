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

// Card Flipping Action //

function flipCard(card) {
  card.classList.toggle('flipped');
}

// Tooltip Action For Villains //

const cards = document.querySelectorAll('.cards');

cards.forEach((card) => {
  const images = card.querySelectorAll('img');
  let currentIndex = 0;
  let tooltipVisible = false;

  // Create a tooltip div for this card //

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  card.appendChild(tooltip);

  images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none'; // Only show first image
  });

  // Add click listener to the card //

  card.addEventListener('click', () => {
    const currentImg = images[currentIndex];

    if (!tooltipVisible) {
      const name = currentImg.getAttribute('data-title') || 'Name Unknown';
      const bio = currentImg.getAttribute('data-bio') || 'Bio not available.';
      tooltip.innerHTML = `<strong>${name}</strong><br><span>${bio}</span>`;

      // Position tooltip over the image //

      tooltip.style.display = 'block';
      tooltip.style.position = 'absolute';
      tooltip.style.top = `${currentImg.offsetTop + 10}px`;
      tooltip.style.left = `${currentImg.offsetLeft + 10}px`;
      tooltip.style.width = `${currentImg.offsetWidth - 20}px`;
      tooltip.style.height = 'fit-content';

      tooltipVisible = true;
    } else {
      // Hide tooltip and show next image //
      tooltip.style.display = 'none';
      tooltipVisible = false;

      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }
  });
});


// Select the card with ID 'btm_vs'

const card = document.getElementById('btm_vs');
const img = card.querySelector('img');
const infoPanel = card.querySelector('.info-panel');

let panelVisible = false;

img.addEventListener('click', () => {
  if (!panelVisible) {
    const name = img.getAttribute('data-title-2') || 'Name Unknown';
    const bio = img.getAttribute('data-bio-2') || 'Bio not available.';
    infoPanel.innerHTML = `<strong>${name}</strong><br><br><span>${bio}</span>`;
    infoPanel.style.display = 'block';
    panelVisible = true;
  } else {
    infoPanel.style.display = 'none';
    panelVisible = false;
  }
});