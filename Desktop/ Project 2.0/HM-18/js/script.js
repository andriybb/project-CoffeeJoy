'use strict';

import { generateUL } from "./renderCategories.js";
import { data } from "./data.js";
import { createOrder } from "./createOrder.js";
import { myOrders  } from "./myOrders.js";
import { showMyOrders } from "./myOrdersScript.js";
import { getOrderDate } from "./getDate.js";

export const body = document.querySelector('body');
export const modal = document.querySelector('.popup-wrapper');
const okBtn = document.querySelector('.ok-btn');
const editDataBtn = document.querySelector('.edit-data-btn');
const goodsWrapper = document.querySelector('.goods-wrapper');
export const buyWrapper = document.querySelector('.buy-wrapper');
export const goodCardWrapper = document.querySelector('.goods-card-wrapper');
export const container = document.querySelector('.container');
export let imgSrc = '';
export let goodNameText = '';
export let goodPriceText = '';

const categories = document.querySelector('.categories');
const ul = generateUL(data);
categories.append(ul);

const categoriesList = document.querySelector('.categories-list');

const goodsTpl = `      
        <div class="goods-card" data-dataid = {goodId}>
        <img src={img} alt="goods" data-dataid = {goodId} class="goods-img">
        <h3 class = "goods-name" data-dataid = {goodId}>{name}</h3>
        <p class="goods-price" data-dataid = {goodId}>{price}</p>
        </div>
    `;

export let goodsHeader = document.createElement('h2');
goodsHeader.classList.add('goods-header');
goodsWrapper.prepend(goodsHeader);

categoriesList.addEventListener('click', (event) => {
    if (event.target.closest('.categories-item')){
        const myOrdersBtn = document.querySelector('.my-orders');
        myOrdersBtn.removeAttribute('disabled');
        goodsWrapper.classList.remove('hidden');
        goodCardWrapper.classList.remove('hidden');
        myOrdersWrapper.classList.add('hidden');
        buyWrapper.innerHTML = '';

        myOrders.orders.forEach(element => {
            if (document.querySelector('.my-orders-preview')){
                document.querySelector('.my-orders-preview').remove();
            }
            if (document.querySelector('.my-orders-full')){
                document.querySelector('.my-orders-full').remove();
            }
        });
        
        
        const key = event.target.dataset.dataid;
        const itemPosition = data.findIndex((item) => item.dataId === key);
        const goods = data[itemPosition][key];
        goodsHeader.innerHTML = data[itemPosition].category;        
        
        if(!goods){
            goodCardWrapper.innerHTML = `<div class = "default-text">У даній категорії наразі відсутні товари</div>`;
            return;
        }        
        
        goodCardWrapper.innerHTML = goods.map(item =>
            goodsTpl
                .replaceAll('{img}', item.img)
                .replaceAll('{name}', item.name)
                .replaceAll('{price}', item.price)
                .replaceAll('{goodId}', item.goodId)
        ).join('');   
        
        const goodsCard = document.querySelectorAll('.goods-card');
        goodsCard.forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });       

        document.querySelectorAll('.goods-img').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });

        document.querySelectorAll('.goods-name').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });

        document.querySelectorAll('.goods-price').forEach((item) => {
            item.setAttribute('data-dataparentid', data[itemPosition].dataId);
        });
    }
});

const buyTpl = `      
            <h3 class="buy-title">{title}</h3>
            <img src={img} alt="buy" class="buy-img">
            <p class="buy-description">{description}</p>
            <p class="goods-price">{price}</p>
            <div class="button-wrapper">
                <button class = "buy-btn">Купити</button>
            </div>
    `;

goodsWrapper.addEventListener('click', (event) => {
    if (event.target.closest('.goods-card')){

        const key = event.target.dataset.dataparentid;
        const keyGood = event.target.dataset.dataid;
        const itemPosition = data.findIndex((item) => item.dataId === key);
        const goods = data[itemPosition][key];
        const goodsPosition = goods.findIndex((item) => item.goodId === keyGood);
        const buyGoods = goods[goodsPosition][keyGood];
               
        buyWrapper.innerHTML = buyGoods.map(item =>
            buyTpl
                .replaceAll('{title}', item.name)
                .replaceAll('{img}', item.img)
                .replaceAll('{description}', item.description)
                .replaceAll('{price}', item.price)
        ).join('');

        const buyBtn = document.querySelector('.buy-btn');

        buyBtn.addEventListener('click', createOrder);
        imgSrc = document.querySelector('.buy-img').getAttribute('src');
        goodNameText = buyGoods[0].name;
        goodPriceText = buyGoods[0].price;

    }
})

function closePopup (){
    modal.classList.remove('active-popup');
    goodCardWrapper.innerHTML = '';
    buyWrapper.innerHTML = '';
    goodsHeader.innerHTML = '';
    const order = document.querySelector('.order');
    order.remove();
    body.classList.remove('under-modal');
    window.scrollTo({ top: 0, behavior: 'smooth'});

    const myOrderGoodName = document.querySelector('.good-detail-name').innerText;
    const myOrderFullName = document.querySelector('.full-name-text span.value').innerText;
    const myOrderGoodQuantity = document.querySelector('.quantity-text span.value').innerText;
    const myOrderPrice = document.querySelector('.good-detail-price').innerText;
    const imgSrc = document.querySelector('.good-detail-img img').getAttribute('src');
    const myOrderCity = document.querySelector('.city-text span.value').innerText;
    const myOrderNewPost = document.querySelector('.new-post-text span.value').innerText;
    const myOrderPayment = document.querySelector('.payment-text span.value').innerText;
    const myOrderComment = document.querySelector('.comment-text span.value').innerText;
    const myOrderTotal = document.querySelector('.total-text span.goods-price').innerText;
    
    const myOrderDate = getOrderDate();
    
    const myOrderObj = {
        myOrderDate,
        myOrderGoodName,
        myOrderFullName,
        myOrderGoodQuantity,
        myOrderPrice,
        imgSrc,
        myOrderCity,
        myOrderNewPost,
        myOrderPayment,
        myOrderComment,
        myOrderTotal
    }
    
    myOrders.setMyOrders(myOrderObj);
    showMyOrders();

}

okBtn.addEventListener('click', closePopup);

editDataBtn.addEventListener('click', () => {
    modal.classList.remove('active-popup');
})

export const myOrdersBtn = document.querySelector('.my-orders');
export const myOrdersWrapper = document.querySelector('.my-orders-wrapper');
myOrdersBtn.addEventListener('click', showMyOrders);