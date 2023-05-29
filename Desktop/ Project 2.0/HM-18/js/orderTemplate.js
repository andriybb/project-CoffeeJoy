'use strict';

export const orderTpl = `      
        <div class = "form">
            <form name = "orderForm" novalidate>
                <div class = flex-wrapper>                        
                    <div class = "left-flex">
                        <label class = input-box>
                            Вкажіть своє прізвище, ім\'я та по-батькові *
                            <input type = "text" name = "fullName" class = "fullName" placeholder = "ПІБ" required>
                            <span class = "error-span"></span>
                        </label>
                        <label class = input-box>
                            Вкажіть кількість товару *
                            <input type = "number"  min = "1" name = "quantity" class = "quantity" placeholder = "Кількість товару" required>
                            <span class = "error-span"></span>
                        </label>
                        <label class="input-box">
                            Оберіть своє місто *
                            <select type = "select" name="city" class = "city" required>
                                <option value="none" disabled selected>Оберіть своє місто</option>
                                <option value="Київ">Київ</option>
                                <option value="Харків">Харків</option>
                                <option value="Львів">Львів</option>
                                <option value="Одеса">Одеса</option>
                            </select> 
                            <span class = "error-span"></span>                   
                        </label>
                        <label class="input-box">
                            Оберіть відділення Нової пошти *
                            <select name="newPost" class = "new-post" required disabled>
                                <option value="none" disabled selected>Оберіть відділення Нової пошти</option>
                                <option value="Відділення 1">Відділення 1</option>
                                <option value="Відділення 2">Відділення 2</option>
                                <option value="Відділення 3">Відділення 3</option>
                                <option value="Відділення 4">Відділення 4</option>
                            </select> 
                            <span class = "error-span"></span>                  
                        </label>
                    </div>
                    <div class = "right-flex">
                        <fieldset class="input-box fieldset-radio">
                            <legend>Варіант оплати *</legend>
                                <label>
                                    <input type="radio" name="payment" value="Післяплата" class = "payment">
                                    Післяплата
                                </label>
                                <label>
                                    <input type="radio" name="payment" value="Оплата банківською картою" class = "payment">
                                    Оплата банківською картою
                                </label>
                                <span class = "error-span"></span>                                
                        </fieldset>
                        <label class="input-box textarea-box">
                            Коментар до замовлення
                            <textarea placeholder = "Коментар до замовлення" name = "comment" class = "comment-textarea"></textarea>
                            <span class = "error-span"></span> 
                        </label> 
                    </div>                
                </div>            

                <div class = "buttons">
                    <button class = "create-order" type="submit">Оформити замовлення</button>
                    <button class = "other-good" type="submit">Обрати інший товар</button>
                </div>
            </form>
        </div>
    `;