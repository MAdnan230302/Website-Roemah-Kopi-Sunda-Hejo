function initCarousel() {
  const mainCourse = document.querySelector(".main-course-carousel");
  const drinks = document.querySelector(".drinks-carousel");
  const snacks = document.querySelector(".snacks-carousel");

  for (let i = 0; i < 5; i++) {
    const mainCourseCarousel = document
      .querySelector(".main-course-carousel-slide")
      .cloneNode(true);
    const drinksCarousel = document
      .querySelector(".drinks-carousel-slide")
      .cloneNode(true);
    const snacksCarousel = document
      .querySelector(".snacks-carousel-slide")
      .cloneNode(true);

    mainCourse.appendChild(mainCourseCarousel);
    drinks.appendChild(drinksCarousel);
    snacks.appendChild(snacksCarousel);
  }
}

initCarousel();

// Form reservation
const form = document.querySelector("#reservation-item-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const tableName = document.querySelector("#table_name").value;
  const tableSize = document.querySelector("#table_capacity").value;
  const date = document.querySelector("#order_date").value;
  const order = document.querySelector("#order").value;

  const orderText = `Halo, saya ingin reservasi meja untuk ${tableSize} orang, atas nama ${tableName} pada tanggal/waktu ${date} 
    
    Order:
    ${order || "*Pesan ditempat"}`;

  window.location.replace(`https://wa.me/081904980586?text=${orderText}`);
});

const hamburger = document.querySelector("#burger-navigation");
const mobileNavigation = document.querySelector(".nav-mobile-main");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open"); // Tambahkan kelas "open" dengan string literal
  mobileNavigation.classList.toggle("menu-active"); // Toggle kelas "menu-active"
});
