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

//close modal
closeTag.addEventListener("click", function () {
  modalsection.style.display = "none";
});

//Add Element to cart
const emptyCart = document.querySelector(".cartText");
const cart_btn = document.querySelector(".cart-btn");
cart_btn.addEventListener("click", function () {
  if (count.valueOf() == 0) {
    emptyCart.innerHTML = ` <div class="cart-text">Your cart is empty</div>`;
    return;
  }
  // let total = (123).toFixed(2);
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
                  <p class="add_cartText">&dollar;125.00</p>
                  <p class="add_cartText mul">&times;</p>
                   <p class="add_cartText">${count}</p>
                  <p class="mul">&dollar;${count * 125}</p>
                </div>
              </div>
              <div class="delete-btn">
                <img src="images/icon-delete.svg" class="del-img" alt="" />
              </div>
            </div>
            <div class="box-btn">
              <button class="addCart-btn">Checkout</button>
            </div>
            </div>`;
  }

  //show the number of item avaiable in your cart img
  if (count < 0) {
    return;
  }
  const number_count = document.querySelector(".number");
  number_count.textContent = count;

  // Delete item from your cart
  const del_img = document.querySelector(".del-img");
  del_img.addEventListener("click", function () {
    emptyCart.innerHTML = ` <div class="cart-text">Your cart is empty</div>`;
    count = 0;
    number_count.textContent = count;
    numItem.textContent = count;
  });

  //   cart_img.addEventListener("click", function addToggle() {
  //   addCart.classList.toggle("show-cart");
  // });
  //close links
});

const menu = document.querySelector(".menu-img");
const links_box = document.querySelector(".links_box");
menu.addEventListener("click", function () {
  links_box.style.display = "block";
  // links_box.classList.add("active");
});

const close_links = document.querySelector(".close_links");
const links = document.querySelector(".links");
close_links.addEventListener("click", function () {
  links_box.style.display = "none";
});
// window.addEventListener("click", function (e) {
//   if (!e.target.className.includes("menu-img")) {
//     if (links_box.style.display == "none") {
//       return;
//     }
//     links_box.style.display = "none";
//   }
// });

let move_icons = document.querySelectorAll(".next-icon");
let main_img = document.querySelector(".zoom_img");
let slider = document.querySelectorAll(".slider");
move_icons.forEach(function (icon) {
  icon.addEventListener("click", Move_img);
});
function Move_img(e) {
  const next_icons = e.target.classList;
  for (let i = 0; i <= slider.length; i++) {
    if (next_icons.contains("next")) {
      slider.src = main_img[i];
    }
    if (next_icons.contains("previous")) {
      console.log("move previous");
    }
  }
}
