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

// Select the card with ID 'btm_vs' //

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.btm_vs');

  cards.forEach((card) => {
    const img = card.querySelector('img');
    const infoPanel = card.querySelector('.info-panel');
    let panelVisible = false;

    img.addEventListener('click', () => {
      if (!panelVisible) {
        const name = img.getAttribute('data-title-2') || 'Name Unknown';
        const bio = img.getAttribute('data-bio-2') || 'Bio not available.';
        infoPanel.innerHTML = `<strong class="villain-name">${name}</strong><br><br><span>${bio}</span>`;
        infoPanel.style.display = 'block';
        panelVisible = true;
      } else {
        infoPanel.style.display = 'none';
        panelVisible = false;
      }
    });
  });
});

// Open modals //

document.getElementById('contactBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('contactModal').style.display = 'block';
});

document.getElementById('followBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('followModal').style.display = 'block';
});

// Close modal function //

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal if user clicks outside content //

window.onclick = function (event) {
  const contact = document.getElementById('contactModal');
  const follow = document.getElementById('followModal');
  if (event.target == contact) contact.style.display = 'none';
  if (event.target == follow) follow.style.display = 'none';
};
