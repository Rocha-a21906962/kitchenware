

/* ingredient data */
const ingredients = () => {
    return [
        {
            name: 'tuna',
            image: '/tuna.jpg',
            categories : [
                {
                    name: 'fish',
                },
                {
                    name: 'healthy',
                }
            ],
            calories_per_unit: 2,
            unit: 'kg',
            in_stock : {
                value: 1,
                new_value: 1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'beef mince',
            image: '/beef_mince.jpg', 
            calories_per_unit: 3,
            unit: 'kg',
            categories : [
                {
                    name: 'meat',
                },
                {
                    name: 'beef',
                }
            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'vegetable oil',
            image: '/vegetable_oil.jpg', 
            calories_per_unit: 88,
            unit: 'l',
            categories : [
                {
                    name: 'oil and vinegar',
                },
            ],
            in_stock : {
                value: 2.5,
                new_value: 2.5,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'bacon',
            image: '/bacon.webp', 
            calories_per_unit: 5,
            unit: 'kg',
            categories : [
                {
                    name: 'meat',
                },
            ],
            in_stock : {
                value: 3,
                new_value: 3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'onion',
            image: '/onion.jpg', 
            calories_per_unit: 0.4,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 1.5,
                new_value: 1.5,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'celery',
            image: '/celery.jpg', 
            calories_per_unit: 0.1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 1.1,
                new_value: 1.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'carrots',
            image: '/carrots.jpg', 
            calories_per_unit: 0.1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'garlic',
            image: '/garlic.jpg', 
            calories_per_unit: 1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.4,
                new_value: 2.4,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'bay leaves',
            image: '/bay_leaves.webp', 
            calories_per_unit: 3,
            unit: 'kg',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 0.7,
                new_value: 0.7,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 1.5,
                new_value: 1.5,
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
            name: 'red wine vinegar',
            image: '/red_wine_vinegar.jpg', 
            calories_per_unit: 3,
            unit: 'l',
            categories : [
                {
                    name: 'oil and vinegar',
                },
            ],
            in_stock : {
                value: 3,
                new_value: 3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'oregano',
            image: '/oregano.jpg', 
            calories_per_unit: 6,
            unit: 'kg',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 1.2,
                new_value: 1.2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'tomatoes',
            image: '/tomatoes.jpg', 
            calories_per_unit: 1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.7,
                new_value: 2.7,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'mushrooms',
            image: '/mushrooms.jpg', 
            calories_per_unit: 1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.3,
                new_value: 2.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'salt',
            image: '/salt.jpg', 
            calories_per_unit: 0,
            unit: 'tsp',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 2.9,
                new_value: 2.9,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'black pepper',
            image: '/black_pepper.webp', 
            calories_per_unit: 6,
            unit: 'tsp',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 1.1,
                new_value: 1.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'spaghetti',
            image: '/spaghetti.jpg', 
            calories_per_unit: 2,
            unit: 'kg',
            categories : [
                {
                    name: 'pasta',
                },
            ],
            in_stock : {
                value: 7,
                new_value: 7,
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
                value: false,
                new_value: false,
            },
        },
{	
            name: 'salmon',
            image: '/salmon.webp', 
            calories_per_unit: 2,
            unit: 'kg',
            categories : [
                {
                    name: 'fish',
                },
{
                    name: 'healthy',
                },

            ],
            in_stock : {
                value: 0.9,
                new_value: 0.9,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'basil',
            image: '/basil.jpg', 
            calories_per_unit: 0.5,
            unit: 'kg',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 1,
                new_value: 1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.2,
                new_value: 0.2,
                min_input: 0,
                max_input: 5,
                step: 0.1,
            },
            default_order_quantity : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'olive oil',
            image: '/olive_oil.jpg', 
            calories_per_unit: 119,
            unit: 'l',
            categories : [
                {
                    name: 'oil and vinegar',
                },
            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'Parmesan cheese',
            image: '/parmesan.jpg', 
            calories_per_unit: 4,
            unit: 'kg',
            categories : [
                {
                    name: 'eggs and dairy products',
                },
            ],
            in_stock : {
                value: 3,
                new_value: 3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'bread crumbs',
            image: '/bread_crumbs.jpg', 
            calories_per_unit: 4,
            unit: 'kg',
            categories : [
                {
                    name: 'bread',
                },
            ],
            in_stock : {
                value: 1.3,
                new_value: 1.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'Eggs',
            image: '/eggs.jpg', 
            calories_per_unit: 72,
            unit: '',
            categories : [
                {
                    name: 'eggs and dairy products',
                },
            ],
            in_stock : {
                value: 1,
                new_value: 1,
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
            name: 'chicken breast',
            image: '/chicken_breast.jpg', 
            calories_per_unit: 2,
            unit: 'kg',
            categories : [
                {
                    name: 'meat',
                },
                {
                    name: 'healthy',
                },
                {
                    name: 'chicken',
                }

            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'red pepper',
            image: '/red_pepper.jpg', 
            calories_per_unit: 6,
            unit: 'tsp',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 2.1,
                new_value: 2.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'rice',
            image: '/rice.webp', 
            calories_per_unit: 2,
            unit: 'kg',
            categories : [
                {
                    name: 'healthy',
                },
                {
                    name: 'grains',
                },
            ],
            in_stock : {
                value: 3.3,
                new_value: 3.3,
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
                value: false,
                new_value: false,
            },
        },

{	
            name: 'ground turmeric',
            image: '/ground_turmeric.jpg', 
            calories_per_unit: 8,
            unit: 'tsp',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'cornstarch',
            image: '/cornstarch.jpg', 
            calories_per_unit: 10,
            unit: 'tsp',
            categories : [
                {
                    name: 'miscellaneous',
                },
            ],
            in_stock : {
                value: 2.1,
                new_value: 2.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'honey',
            image: '/honey.jpg', 
            calories_per_unit: 64,
            unit: 'l',
            categories : [
                {
                    name: 'miscellaneous',
                },
            ],
            in_stock : {
                value: 2.5,
                new_value: 2.5,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'Dijon mustard',
            image: '/dijon.webp', 
            calories_per_unit: 7,
            unit: 'l',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 1.9,
                new_value: 1.9,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'Mexican-style hot sauce',
            image: '/mexican_sauce.jpg', 
            calories_per_unit: 2,
            unit: 'l',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 2,
                new_value: 2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'paprika',
            image: '/paprika.jpg', 
            calories_per_unit: 19,
            unit: 'kg',
            categories : [
                {
                    name: 'condiments',
                },
            ],
            in_stock : {
                value: 3.1,
                new_value: 3.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'brown sugar',
            image: '/brown_sugar.jpg', 
            calories_per_unit: 52,
            unit: 'kg',
            categories : [
                {
                    name: 'miscellaneous',
                },
            ],
            in_stock : {
                value: 1.3,
                new_value: 1.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'chicken thighs',
            image: '/chicken_thighs.jpg', 
            calories_per_unit: 3,
            unit: 'kg',
            categories : [
                {
                    name: 'meat',
                },
                {
                    name: 'chicken',
                }
            ],
            in_stock : {
                value: 2.4,
                new_value: 2.4,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'cauliflower',
            image: '/cauliflower.jpg', 
            calories_per_unit: 0.1,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.2,
                new_value: 2.2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'water',
            image: '/water.jpg', 
            calories_per_unit: 0,
            unit: 'cup',
            categories : [
                {
                    name: 'miscellaneous',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 30,
                new_value: 30,
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
            name: 'cod',
            image: '/cod.jpg', 
            calories_per_unit: 2.1,
            unit: 'kg',
            categories : [
                {
                    name: 'fish',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 4.2,
                new_value: 4.2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'chives',
            image: '/chives.jpeg', 
            calories_per_unit: 0.3,
            unit: 'kg',
            categories : [
                {
                    name: 'vegetables',
                },
            ],
            in_stock : {
                value: 2.2,
                new_value: 2.2,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'lemons',
            image: '/lemons.jpg', 
            calories_per_unit: 17,
            unit: '',
            categories : [
                {
                    name: 'fruit',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.3,
                new_value: 2.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'butter',
            image: '/butter.jpg', 
            calories_per_unit: 7,
            unit: 'kg',
            categories : [
                {
                    name: 'eggs and dairy products',
                },               
            ],
            in_stock : {
                value: 1.1,
                new_value: 1.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'skimmed milk',
            image: '/milk.webp', 
            calories_per_unit: 0.35,
            unit: 'ml',
            categories : [
                {
                    name: 'eggs and dairy products',
                },               
            ],
            in_stock : {
                value: 1.1,
                new_value: 1.1,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'bananas',
            image: '/bananas.jpg', 
            calories_per_unit: 107,
            unit: '',
            categories : [
                {
                    name: 'fruit',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.3,
                new_value: 2.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'strawberries',
            image: '/strawberries.jpg', 
            calories_per_unit: 0.33,
            unit: 'kg',
            categories : [
                {
                    name: 'fruit',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.3,
                new_value: 2.3,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            name: 'avocado',
            image: '/avocado.webp', 
            calories_per_unit: 2,
            unit: 'kg',
            categories : [
                {
                    name: 'fruit',
                },
                {
                    name: 'healthy',
                }
            ],
            in_stock : {
                value: 2.7,
                new_value: 2.7,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            image: '/mackerel.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            calories_per_unit: 240,
            unit: 'kg',
            in_stock : {
                value: 13,
                new_value: 13,
                min_input: 0,
                max_input: 100,
                step: 0.1,
            },
            minimum_stock : {
                value: 0.5,
                new_value: 0.5,
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
            image: '/sea_bass.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            calories_per_unit: 240,
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
            image: '/sardines.jpg',
            categories : [
                {
                    name: 'fish'
                },
            ],
            calories_per_unit: 240,
            unit: 'kg',
            in_stock : {
                value: 0,
                new_value: 0,
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
    ];
};

export default ingredients;