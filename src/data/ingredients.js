

/* ingredient data */
const ingredients = () => {
    return [
        {
            name: 'tuna',
            image: 'https://1.bp.blogspot.com/-_QXjE8zwvNo/WaWEY1LFgcI/AAAAAAAAA1k/aar9QC0qFesVlS2c0dgOh4SqZk3TDJSJgCLcBGAs/s1600/Yellowfin%2BTuna%2BSaku%2B-%2BHigh%2BQuality.jpg',
            categories : [
                {
                    name: 'fish',
                },
                {
                    name: 'healthy',
                }
            ],
            unit: 'kg',
            in_stock : {
                value: 14,
                new_value: 14,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 3,
                new_value: 3,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: true,
                new_value: true,
            },
        },
        {
            name: 'cod',
            image: 'https://www.portugalresident.com/wp-content/uploads/2013/12/201213_su_cod_shutterstock.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 12,
                new_value: 12,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 3,
                new_value: 3,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 8,
                new_value: 8,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'salmon',
            image: 'https://images.thefishsite.com/fish/articles/processing/salmon-fillet.jpeg?profile=article-inline@maximum',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 9,
                new_value: 9,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'mackerel',
            image: 'http://www.ingredientes.pt/wp-content/uploads/2016/07/carapaus-com-arroz-de-tomate.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 13,
                new_value: 13,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 1,
                new_value: 1,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'sea bass',
            image: 'https://orders.booths.co.uk/media/catalog/product/cache/59b906c9f4a6503cc9c6cc39e925f9a1/5/4/544_1.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 15,
                new_value: 15,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 1.5,
                new_value: 1.5,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'sardines',
            image: 'https://ncultura.pt/wp-content/uploads/2018/10/capa-3-640x320.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 33,
                new_value: 33,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 2.4,
                new_value: 2.4,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'pescada',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 1,
                new_value: 1,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'peixinho da horta',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 0,
                new_value: 0,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0,
                new_value: 0,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
        {
            name: 'mais atum',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            categories : [
                {
                    name: 'fish'
                },
            ],
            unit: 'kg',
            in_stock : {
                value: 0,
                new_value: 0,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0,
                new_value: 0,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 10,
                step: 0.1,
            },
            auto_order: {
                value: false,
                new_value: false,
            },
        },
    ];
};

export default ingredients;