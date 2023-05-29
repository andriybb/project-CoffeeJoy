'use strict';

export const myOrdersPreviewTpl = `                        
                            <span class="date">{date}</span>
                            <span class="price my-order-price">{price}</span>        
`;

export const myOrdersFullTpl = `
                        
                            <div class="my-order-detail">
                                <div class="my-order-detail-left">
                                    <div class="my-order-detail-img">
                                        <img src = {img} alt="зображення товару" class="my-order-detail-img-item">
                                    </div>
                                </div>
                                <div class="my-order-detail-right">
                                    <div class="my-order-detail-name">
                                        <span class = "key">Найменування товару:</span> 
                                        <span class = "value">{name}</span>
                                    </div>
                                    <div class="my-order-detail-fullname">
                                        <span class = "key">Замовник:</span> 
                                        <span class = "value">{fullName}</span>
                                    </div>
                                    <div class="my-order-detail-price">
                                        <span class = "key">Ціна:</span> 
                                        <span class = "value">{price}</span>
                                    </div>
                                    <div class = "my-order-detail-quantity">
                                        <span class = "key">Кількість:</span> 
                                        <span class = "value">{quantity}</span>
                                    </div>
                                    <div class = "my-order-detail-city">
                                        <span class = "key">Місто:</span> 
                                        <span class = "value">{city}</span>
                                    </div>
                                    <div class = "my-order-detail-new-post">
                                        <span class = "key">Нова пошта:</span> 
                                        <span class = "value">{new-post}</span>
                                    </div>
                                    <div class = "my-order-detail-payment">
                                        <span class = "key">Варіант оплати:</span> 
                                        <span class = "value">{payment}</span>
                                    </div>
                                    <div class = "my-order-detail-comment">
                                        <span class = "key">Коментар:</span> 
                                        <span class = "value">{comment}</span>
                                    </div>
                                    <div class = "my-order-detail-total">
                                        <span class = "key">Загальна вартість:</span> 
                                        <span class = "value">{total}</span>
                                    </div>
                                    <button class = "buy-btn mt-20" id = {id}>Видалити</button>
                                </div>
                            </div>
                        
`;