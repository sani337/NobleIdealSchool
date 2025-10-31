// Hamburger menu toggle
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in, .slide-down, .zoom');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader=>{ appearOnScroll.observe(fader); });





















// const track = document.querySelector('.carousel-track');
//   const images = document.querySelectorAll('.carousel img');
//   let index = 0;
//   let interval;

//   function startSlide() {
//     interval = setInterval(() => {
//       index = (index + 1) % images.length;
//       updateSlide();
//     }, 2500);
//   }

//   function stopSlide() {
//     clearInterval(interval);
//   }

//   function updateSlide() {
//     track.style.transform = `translateX(-${index * 100}%)`;
//   }

//   // Hover pause
//   track.addEventListener('mouseenter', stopSlide);
//   track.addEventListener('mouseleave', startSlide);

//   startSlide();

//   // Modal logic
//   const modal = document.querySelector('.modal');
//   const modalImg = document.querySelector('.modal-img');
//   const closeBtn = document.querySelector('.close');
//   const leftArrow = document.querySelector('.arrow.left');
//   const rightArrow = document.querySelector('.arrow.right');

//   images.forEach((img, i) => {
//     img.addEventListener('click', () => {
//       modal.style.display = 'flex';
//       modalImg.src = img.src;
//       index = i;
//       stopSlide();
//     });
//   });

//   closeBtn.onclick = () => {
//     modal.style.display = 'none';
//     startSlide();
//   };

//   leftArrow.onclick = () => {
//     index = (index - 1 + images.length) % images.length;
//     modalImg.src = images[index].src;
//   };

//   rightArrow.onclick = () => {
//     index = (index + 1) % images.length;
//     modalImg.src = images[index].src;
//   };

//   // Click outside image to close
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//       startSlide();
//     }
//   });



  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-img');
  const closeBtn = document.querySelector('.close');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;

  // Open modal on click
  images.forEach((img, i) => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      currentIndex = i % (images.length / 2); // handle duplicated images
    });
  });

  // Close modal
  closeBtn.onclick = () => modal.style.display = 'none';
  modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; }

  // Navigate modal
  leftArrow.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length/2) % (images.length/2);
    modalImg.src = images[currentIndex].src;
  };

  rightArrow.onclick = () => {
    currentIndex = (currentIndex + 1) % (images.length/2);
    modalImg.src = images[currentIndex].src;
  };

