'use strict';

export function generateUL(data) {
    let ul = document.createElement('ul');
    ul.classList.add('categories-list');

    data.forEach(function (item) {
       let li = document.createElement('li');
       li.innerText = item.category;
        li.classList.add('categories-item');
        let attributeValue = item.dataId;
        li.setAttribute('data-dataid', attributeValue);

        if (item.children?.length > 0) {
            li.append(generateUL(item.children));
        }

       ul.append(li);
   });

    return ul;
}