
//Show Menu on Mobile device
const toggle = document.getElementById("menu-toggle");
const navList = document.getElementById("navList");
const menuIcon = document.getElementById("menu-icon");

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');

  const isOpen = navList.classList.contains('active');
    menuIcon.textContent = isOpen ? '✖' : '☰';
});

    // Close menu on link click (for smooth scroll behavior)
document.querySelectorAll('.navList a').forEach(link => {
  link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuIcon.textContent = '☰';
  });
});



    //Dropdown 1=======================::
document.querySelectorAll('.dropdown__button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default if button is within a form
    const dropdown = button.closest('.dropdown__item');
    dropdown.classList.toggle('open');

    // Optional: Close other dropdowns
    document.querySelectorAll('.dropdown__item').forEach(el => {
      if (el !== dropdown) el.classList.remove('open');
    });
  });
});

// Optional: Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown__item')) {
    document.querySelectorAll('.dropdown__item').forEach(drop => drop.classList.remove('open'));
  }
});

    // Disable scrolling when the dropdown is active.
    // Re-enable scrolling when the dropdown is closed.
    document.querySelector(".dropdown-menu").addEventListener("mouseenter", () => {
    document.body.style.overflow = "hidden"; // Prevent scrolling
});

document.querySelector(".dropdown-menu").addEventListener("mouseleave", () => {
    document.body.style.overflow = "auto"; // Restore scrolling
});


// header slideShow 
// let slideIndex = 0;

// function showSlides() {
//     let slides = document.getElementsByClassName("slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 3000); // Change slide every 3 seconds
// }

// showSlides();

