"use scrict";
// const minus = document.querySelector(".minus");
const btns = document.querySelectorAll(".btn");
const numItem = document.querySelector(".zero");
let count = 0;
//Count button
btns.forEach(function (btn) {
  btn.addEventListener("click", countItem);
});
function countItem(e) {
  const styles = e.currentTarget.classList;

  if (styles.contains("minus")) {
    count--;
  }
  if (styles.contains("plus")) {
    count++;
  }
  if (count <= 0) {
    count = 0;
  }
  numItem.textContent = count;
}
//show cart menu
const cart_img = document.querySelector(".cart-img");
const addCart = document.querySelector(".add-cart");
cart_img.addEventListener("click", function addToggle() {
  addCart.classList.toggle("show-cart");
});
//Display image on big screen
const bigImage = document.querySelector(".product-img");
const smallImag = document.querySelectorAll("#small-img");

function galleryFunction(small) {
  bigImage.src = small.src;
}
// smallImag.forEach(function (d) {
//   d.addEventListener("click", galleryFunction);
// });
//when the user click on the big image it set to open in a model
const closeTag = document.querySelector(".close");
const modalsection = document.querySelector(".modal-section");
const img_zoom = document.getElementById("img_zoom");
bigImage.addEventListener("click", function (e) {
  var src = e.target.src;
  modalsection.style.display = "block";
  img_zoom.src = src;
});
function galleryFunction2(small) {
  img_zoom.src = small.src;
}
// smallImag.addEventListener("click", function (small) {
//   img_zoom.src = small.target.getAttribure("src");
// });

//close modal
closeTag.addEventListener("click", function () {
  modalsection.style.display = "none";
});

//slide
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//   document.getElementById("myModal").style.display = "none";
// }

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("slider");
//   const slides = document.querySelectorAll("#small-img");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

//Add Element to cart
const emptyCart = document.querySelector(".cartText");
const cart_btn = document.querySelector(".cart-btn");
cart_btn.addEventListener("click", function () {
  if (count.valueOf() == 0) {
    emptyCart.innerHTML = ` <div class="cart-text">Your cart is empty</div>`;
    return;
  }
  let total = (123).toFixed(2);
  if (count.valueOf() >= 1) {
    emptyCart.innerHTML = `   <div class="">
            <div class="detail-section">
              <img
                src="images/image-product-1.jpg"
                id="small-img"
                class="cart-small-image"
              />
              <div class="detail-text">
                <p class="add_cartText">Fall Limited Edition sneakers</p>
                <div class="amount">
                  <p class="add_cartText">&dollar;123.00</p>
                  <p class="add_cartText mul">&times;</p>
                   <p class="add_cartText">${count}</p>
                  <p class="mul">&dollar;${count * total}</p>
                </div>
              </div>
              <div class="delete-btn">
                <img src="images/icon-delete.svg" alt="" />
              </div>
            </div>
            <div class="box-btn">
              <button class="addCart-btn">Checkout</button>
            </div>
            </div>`;
  }
  if (count < 0) {
    return;
  }
  const number_count = document.querySelector(".number");
  number_count.textContent = count;
});
