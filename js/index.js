"use strict";

let cardMainContainer = document.querySelector(".goods__wrapper");

cardMainContainer.innerHTML = ``;
console.log(cardMainContainer);
items.forEach((item) => {
  let singleCard = document.createElement("div");
  singleCard.classList.add("card");
  singleCard.innerHTML = `<div class="card__top">
                  <div class="card__like">
                    <img src="images/like-hart.svg" alt="hart icon">
                  </div>
                  <div class="card__img" style="background-image: url(images/opened_laptop.png);"></div>
                  <h3 class="card__title">${item.name}</h3>
                  <div class="card__ability">
                    <img src="images/${
                      +item.orderInfo.inStock <= 0 || !item.orderInfo.inStock
                        ? "close.svg"
                        : "enough_numbers.jpg"
                    }" alt="icon about amount">
                    <span class="card__amount">${item.orderInfo.inStock}</span>
                    <span>left in stock</span>
                  </div>
                  <div class="card__price">
                    <span>Price:</span>
                    <span class="card__price-value">${item.price}</span>
                    <span class="card__price-valut">$</span>
                  </div>
                  <div class="main-button">Add to card</div>
                </div>
                <div class="card__bottom">
                  <div class="card__statistic">
                    <img src="images/red-hart.svg" alt="red hart icon" class="card__positiv-rewiew">
                    <span class="card__precentage">${
                      item.orderInfo.reviews <= 0
                        ? "0"
                        : Math.trunc(Math.random() * 100) + "%"
                    }</span>
                    <span class="card__statistic-text">Positive reviews</span>
                    <span class="card__total-amount">${
                      item.orderInfo.reviews
                    }</span>
                  </div>
                  <div class="card__average">
                    <span>Above avarage</span>
                    <span class="card__status">orders</span>
                  </div>
                </div>`;
  cardMainContainer.append(singleCard);
});
