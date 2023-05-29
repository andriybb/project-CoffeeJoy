'use strict';

import { buyWrapper, goodsHeader, goodCardWrapper } from "./script.js";
import { myOrders  } from "./myOrders.js";
import { myOrdersPreviewTpl, myOrdersFullTpl } from "./myOrdersTemplate.js";

const myOrdersWrapper = document.querySelector('.my-orders-wrapper');

function renderOrders(){
    myOrders.orders.forEach(item => {
        const myOrdersPreview = document.createElement('div');
        myOrdersPreview.classList.add('my-orders-preview');
        myOrdersPreview.innerHTML = myOrdersPreviewTpl
        .replace('{date}', item.myOrderDate)
        .replace('{price}', item.myOrderTotal);
        myOrdersWrapper.append(myOrdersPreview);
        const myOrdersFull = document.createElement('div');
        myOrdersFull.classList.add('my-orders-full', 'hidden');
        myOrdersFull.innerHTML = myOrdersFullTpl
        .replace('{img}', item.imgSrc)
        .replace('{name}', item.myOrderGoodName)
        .replace('{fullName}', item.myOrderFullName)
        .replace('{price}', item.myOrderPrice)
        .replace('{quantity}', item.myOrderGoodQuantity)
        .replace('{city}', item.myOrderCity)
        .replace('{new-post}', item.myOrderNewPost)
        .replace('{payment}', item.myOrderPayment)
        .replace('{comment}', item.myOrderComment)
        .replace('{total}', item.myOrderTotal)
        .replace('{id}', item.id);
        myOrdersWrapper.append(myOrdersFull);
    });
}

export function showMyOrders(){

    const myOrdersBtn = document.querySelector('.my-orders');
    if (myOrdersBtn.hasAttribute('disabled')){
        return;
    }

    myOrdersWrapper.classList.remove('hidden');
    goodCardWrapper.classList.add('hidden');
    buyWrapper.innerHTML = '';
    goodsHeader.innerHTML = 'Мої замовлення';

    renderOrders();
      
    myOrdersBtn.setAttribute('disabled', '');

}

myOrdersWrapper.addEventListener('click', (event) => {
    if (event.target.closest('.my-orders-preview')){
        if(event.target.classList.contains('my-orders-preview')){
            event.target.classList.add('active-preview');
            if(event.target.nextElementSibling.classList.contains('hidden')){
                event.target.nextElementSibling.classList.remove('hidden');
            } else{
                event.target.nextElementSibling.classList.add('hidden');
                event.target.classList.remove('active-preview');
            }            
        }
        if(event.target.classList.contains('date') || event.target.classList.contains('price')){
            event.target.parentElement.classList.add('active-preview');
            if(event.target.parentElement.nextElementSibling.classList.contains('hidden')){
                event.target.parentElement.nextElementSibling.classList.remove('hidden');
            } else{
                event.target.parentElement.nextElementSibling.classList.add('hidden');
                event.target.parentElement.classList.remove('active-preview');
            }
        }        
    }

    if (event.target.classList.contains('buy-btn')){

        myOrders.deleteOrder(event.target.id);
        myOrdersWrapper.classList.add('hidden');               
        myOrdersWrapper.innerHTML = '';      

        renderOrders();
        
        myOrdersWrapper.classList.remove('hidden');
    }

});