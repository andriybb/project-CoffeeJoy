'use strict';

export const data = [
    {
        category: 'Телефони',
        dataId: 'phones',
        phones: [
            {goodId: 'samsung',
             samsung: [
                {name: 'Мобильный телефон Samsung Galaxy S22 8/128GB Green ',
                img: './img/samsungphone.jpeg',
                price: '30 090 грн.',
                description: 'Екран (6.6", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам\'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год'}
             ],
             name: 'Мобильный телефон Samsung Galaxy S22 8/128GB Green ',
             img: './img/samsungphone.jpeg',
             price: '30 090  грн.',
             description: 'Екран (6.6", PLS, 2408x1080) / Qualcomm Snapdragon 680 (2.4 ГГц + 1.9 ГГц) / основна квадрокамера: 50 Мп + 5 Мп + 2 Мп + 2 Мп, фронтальна камера 8 Мп / RAM 6 ГБ / 128 ГБ вбудованої пам\'яті + microSD (до 1 ТБ) / 3G / LTE / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 12 / 5000 мА*год'},

             {goodId: 'iphone',
             iphone: [
                {name: 'Мобільний телефон Apple iPhone 14 128GB Starlight',
                img: './img/apple14.jpeg',
                price: '36 999 грн.',
                description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16'}
             ],
             name: 'Мобільний телефон Apple iPhone 14 128GB Starlight',
             img: './img/apple14.jpeg',
             price: '36 999 грн.',
             description: 'Экран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / двойная основная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 128 ГБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 16'}
        ]
    },
    {
        category: 'Ноутбуки',
        dataId: 'laptops',
        laptops: [
            {
                goodId: 'apple',
                apple: [
                    {
                        name: 'Ноутбук Apple MacBook Air 13" M1 256GB 2020 ',
                        img: './img/macbook2.jpg.webp',
                        price: '44 599 грн.',
                        description: 'Экран 15.6" (1366x768) WXGA HD, матовый / Intel Core i3-1005G1 (1.2 - 3.4 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 11 Home / 1.8 кг / серый'
                    }
                ],
                name: 'Ноутбук Apple MacBook Air 13" M1 256GB 2020',
                img: './img/macbook2.jpg.webp',
                price: '44 599 грн.'
            },

            {
                goodId: 'acer',
                acer: [
                    {
                        name: 'Ноутбук ASUS Laptop X515JA-BR3971W',
                        img: './img/acer.webp',
                        price: '38 999 грн.',
                        description: 'Екран 15.6” IPS (1920x1080) Full HD 144 Гц, матовий / Intel Core i5-11400H (2.7 - 4.5 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 Ti, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.2 кг / чорний'
                    }
                ],
                name: 'Ноутбук ASUS Laptop X515JA-BR3971W',
                img: './img/acer.webp',
                price: '38 999 грн.'
            }
        ]
    },
    {
        category: 'Монітори',
        dataId: 'monitors'
    },
    {
        category: 'Планшети',
        dataId: 'tablets',
        tablets: [
            {
                goodId: 'iPod',
                iPod: [
                    {
                        name: 'Планшет Apple iPad Pro 11" M2 Wi-Fi 128GB Space Gray',
                        img: './img/ipad.webp',
                        price: '41 499 грн.',
                        description: 'Экран 11" Liquid Retina (2388x1668) MultiTouch / Apple M2 / 128 ГБ встроенной памяти / Wi-Fi / Bluetooth 5.3 / основная двойная камера 12 Мп + 10 Мп, фронтальная - 12 Мп / iPadOS 16 / 466 г / космический серый'
                    }
                ],
                name: 'Планшет Apple iPad Pro 11" M2 Wi-Fi 128GB Space Gray',
                img: './img/ipad.webp',
                price: '41 499 грн.',
                description: 'Экран 11" Liquid Retina (2388x1668) MultiTouch / Apple M2 / 128 ГБ встроенной памяти / Wi-Fi / Bluetooth 5.3 / основная двойная камера 12 Мп + 10 Мп, фронтальная - 12 Мп / iPadOS 16 / 466 г / космический серый'
            },

            {
                goodId: 'galaxy',
                galaxy: [
                {
                    name: 'Планшет Samsung Galaxy Tab S8+ 5G 128 GB Graphite',
                    img: './img/samsung.jpeg',
                    price: '42 999 грн.',
                    description: 'Екран 12.4" (2800x1752) MultiTouch / Qualcomm Snapdragon 8 Gen 1 (3.0 ГГц) / RAM 8 ГБ / 128 ГБ вбудованої пам\'яті + microSD / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.2 / подвійна основна камера: 13 Мп + 6 Мп, фронтальна — 12 Мп / Android 12 / 572 г / графітовий'
                }
                ],
                name: 'Планшет Samsung Galaxy Tab S8+ 5G 128 GB Graphite',
                img: './img/samsung.jpeg',
                price: '42 999 грн.',
                description: 'Екран 12.4" (2800x1752) MultiTouch / Qualcomm Snapdragon 8 Gen 1 (3.0 ГГц) / RAM 8 ГБ / 128 ГБ вбудованої пам\'яті + microSD / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.2 / подвійна основна камера: 13 Мп + 6 Мп, фронтальна — 12 Мп / Android 12 / 572 г / графітовий'
            },
        ]
    },
];