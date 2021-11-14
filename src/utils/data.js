/*import image_1 from '../images/products/pic-1.png';
import image_2 from '../images/products/pic-2.png';
import image_3 from '../images/products/pic-3.png';
import image_4 from '../images/products/pic-4.png';
import image_5 from '../images/products/pic-5.png';
import image_6 from '../images/products/pic-6.png';
import image_7 from '../images/products/pic-7.png';
import image_8 from '../images/products/pic-8.png';
import image_9 from '../images/products/pic-9.png';
import image_10 from '../images/products/pic-10.png';
*/
const products = [
    {
    "items": [
    {
    "id": 1,
    "name": "Philips hue bulb",
    "brand": "Philips",
    "price": "500",
    "available": true,
    "weight": 0.2,
    "options": [
    {
    "color": "white",
    "power": [6.5, 9.5],
    "quantity": 3
    },
    {
    "color": "red",
    "power": [6.5, 9.5],
    "quantity": 7
    }
    ]
    },
    {
        "id": 2,
        "name": "Trådfria Lampor",
        "brand": "IKEA",
        "price": "300",
        "available": true,
        "weight": 0.2,
        "options": [
        {
        "color": "white",
        "power": [6.5, 9.5],
        "quantity": 3
        },
        {
        "color": "red",
        "power": [6.5, 9.5],
        "quantity": 7
        },
        {
        "color": "green",
        "power": [6.5],
        "quantity": 0
        }
        ]
        },
        {
        "id": 3,
        "name": "Playstation 4",
        "brand": "Sony",
        "price": "5000",
        "available": true,
        "weight": 2.1,
        "options": [
        {
        "color": ["black"],
        "storage": ["250", "500", "1000"],
        "quantity": 10
        },
        {
        "color": ["white"],
        "storage": ["250", "500"],
        "quantity": 3
        }
        ]
        },
        {"id": 4,
            "name": "Nintendo switch",
            "brand": "Nintendo",
            "price": "4500",
            "available": true,
            "weight": 1.6,
            "options": [
            {
            "color": ["black"],
            "storage": ["250", "500"],
            "quantity": 0
            },
            {
            "color": ["white"],
            "storage": ["250", "500"],
            "quantity": 12
            },
            {
            "color": ["red"],
            "storage": ["500"],
            "quantity": 5
            }
            ]
            },
            {
            "id": 5,
            "name": "Bluetooth speaker",
            "brand": "JBL",
            "price": "800",
            "available": false,
            "weight": 0.5,
            "options": [
            {
            "color": ["black"],
            "quantity": 15
            },
            {
            "color": ["white"],
            "quantity": 0
            },
            {
            "color": ["red"],
            "quantity": 1
            }
            ]
        },
        {
        "id": 6,
        "name": "Bluetooth speaker",
        "brand": "Marshall",
        "price": "950",
        "available": true,
        "weight": 0.5,
        "options": [
        {
        "color": ["black"],
        "quantity": 1
        },
        {
        "color": ["white"],
        "quantity": 11
        },
        {
        "color": ["orange"],
        "quantity": 2
        }
        ]
        },
        {
        "id": 7,
        "name": "Electrical toothbrush",
        "brand": "BRAUN",
        "price": "950",
        "available": false,
        "weight": 0.4,
        "options": [
        {
        "color": ["green"],
        "quantity": 0
        },
        {
        "color": ["white"],
        "quantity": 0
        }
        ]
        },
        {
        "id": 8,
        "name": "Samsung 40 UHD Smart TV",
        "brand": "SAMSUNG",
        "price": "3200",
"available": true,
"weight": 8.2,
"options": [
{
"color": ["black"],
"quantity": 19
}
]
},
{
"id": 9,
"name": "BenQ GW2765HE Eye-Care",
"brand": "BenQ",
"price": "2700",
"available": false,
"weight": 3.9,
"options": [
{
"color": ["black"],
"quantity": 3
}
]
},
{
"id": 10,
"name": "Corsair HS60 gaming headset",
"brand": "Corsair",
"price": "1200",
"available": true,
"weight": 0.8,
"options": [
{
"color": ["black"],
"quantity": 3
},
{
"color": ["red"],
"quantity": 9
}
]
}
]
}
];

export default products; 