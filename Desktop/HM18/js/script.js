import { generateUL } from "./renderCategories.js";
import { data } from "./data.js";

const modal = document.querySelector('.popup-wrapper');
const okBtn = document.querySelector('.of-btn');
const goodsWrapper = document.querySelector('.goods-wrapper');
const buyWrapper = document.querySelector('.buy-wrapper');
const goodCardWrapper = document.querySelector('.goods-card-wrapper');
const body= document.querySelector('body');

const categories = document.querySelector('.categories');
const ul = generateUL(data);
categories.append(ul);

const categoriesList = document.querySelector('.categories-list');

const goodsTpl = `      
    <div class="goods-card" data-dataid="{goodId}">
        <img src="{img}" alt="goods" data-dataid="{goodId}" class="goods-img">
        <h3 class="goods-name" data-dataid="{goodId}">{name}</h3>
        <p class="goods-price" data-dataid="{goodId}">{price}</p>
    </div>
`;
   let goodsHeader = document.createElement('h2');
    goodsHeader.classList.add('goods-header');
   goodsWrapper.prepend(goodsHeader);

categoriesList.addEventListener('click', (event) => {
    if (event.target.closest('.categories-item')){
       goodsWrapper.classList.remove('hidden');
      buyWrapper.innerHTML = '';
      console.log(addEventListener);

        const key = event.target.dataset.dataid;
        console.log (key);
        const itemPosition = data.findIndex((item) => item.dataId === key);
        console.log(itemPosition);
       const goods = data[itemPosition][key];
       console.log(goods);
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

        buyBtn.addEventListener('click', () => {
            modal.classList.add('active-popup');
           document.body.classList.add('under-modal');
        });
    }
    })

    function closePopup (){
        modal.classList.remove('active-popup');
        goodCardWrapper.innerHTML = '';
        buyWrapper.innerHTML = '';
        goodsHeader.innerHTML = '';
        document.body.classList.add('under-modal');
        const name = document.querySelector('.name1');
        const city = document.querySelector('.info2');
        const post = document.querySelector('.np1');
        const pay = document.querySelector('.payment');
        const figure = document.querySelector('.number');
        const coment = document.querySelector('.comment');
        goodsWrapper.innerHTML = `<div>${coment.value}</div><div>${figure.value}</div><div>${pay.value}</div><div>${post.value}</div><div>${city.value}</div><div>${name.value}</div>`;
        document.body.classList.add('under-modal');
   }
   
okBtn.addEventListener('click', closePopup);



    window.addEventListener('load', init);

    
    function init() {
        document.myForm.addEventListener('submit', function (event) {
            console.log(this.elements);
            console.log([...this.elements]);

            event.preventDefault();

            [...this.elements]
                .filter(element => element.type !== 'submit')
                .forEach(validateElement)
        })

        const inputs = document.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('blur', function (){
                validateElement(this)
            });
        })

        function validateElement(element) {
            const errorElement = element.nextElementSibling;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                return;
            }

            if (element.hasAttribute('required') && element.value.trim() === '') {
                errorElement.innerHTML ='Це поле обовязкове для заповнення';
            } else if(element.type === 'text' && !/^\S+@\S+\.\S+$/.test(element.value)) {
                errorElement.innerHTML = 'Поле ПІБ покупця не може бути порожнім';
            } else if(element.type ===  'select' && element.selectedIndex === 1){
                errorElement.innerHTML = 'Будь ласка, виберіть місто' ;
            } 
            else {
                errorElement.innerHTML = '';
            }
        }
    }
    
