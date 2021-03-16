

/* recipe data */
const recipes = () => {
    return [
        {
            name: 'tuna recipe 1',
            image: '',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'healthy'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.2,
                    unit: 'kg',
                },
                {
                    name: 'rice',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'salt',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            preparation_time: 30,
            cooking_time: 60,
            steps: [
                {
                    number: 1,
                    time: 2,
                    description: "Rub the garlic halves and thyme leaves all over the beef. Place the joint in a large dish, drizzle over the olive oil, then rub it into the meat all over. Cover and leave to marinate in the fridge for 1–2 days before you cook it (you don’t have to marinate the beef in advance, but it does make it super tasty! – see Tip). Take the beef out of the fridge about an hour before cooking, to let it come up to room temperature."
                },
                {
                    number: 2,
                    time: 6,
                    description: "Preheat the oven to 190°C/170°C fan/Gas 5."
                },
                {
                    number: 3,
                    time: 20,
                    description: "Preheat a dry frying pan until very hot, then sear the beef over a high heat until it’s coloured on all sides. Place the beef in a large, hob-proof roasting tray with the garlic halves and the thyme sprig and roast for about 45 minutes for medium rare (or until it reaches 45–47°C in the centre, if you have a meat thermometer). Add 10–12 minutes for medium (or until it reaches 55–60°C in the centre), or add about 20 minutes if you like it well done (or until it reaches 65–70°C in the centre)."
                },
                {
                    number: 4,
                    time: 15,
                    description: "Transfer the beef to a warm platter, cover loosely with foil and leave to rest for at least 20 minutes, and anything up to 40 minutes, before serving."
                },
                {
                    number: 5,
                    time: 45,
                    description: "Meanwhile, to make the gravy, place the roasting tray over a low heat on the hob, add the onions to the juices in the tray and cook gently for about 20 minutes, stirring occasionally, until really soft and caramelised. Stir in the flour until combined, then whisk in the red wine, making sure there are no lumps. Bring to the boil, whisking, then bubble rapidly until the red wine has reduced by half. Stir in the hot stock, then cook over a medium heat for about 8 minutes, stirring occasionally, until reduced to a thick gravy."
                },
                {
                    number: 6,
                    time: 2,
                    description: "Carve the beef thinly and pour the gravy into a warm jug. Serve with Yorkshire Puddings and steamed chard."
                },
            ], 
            servings: 4,
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
        },


        {
            name: 'cod recipe 1',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'cod',
                    quantity: 0.2,
                    unit: 'kg',
                },
                {
                    name: 'potatoes',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'salt',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 10,
            cooking_time: 20,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'cod recipe 2',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'cod',
                    quantity: 0.2,
                    unit: 'kg',
                },
                {
                    name: 'potatoes',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 5,
            cooking_time: 30,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 2',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.2,
                    unit: 'kg',
                },
                {
                    name: 'potatoes',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olives',
                    quantity: '50',
                    unit: 'g',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 15,
            cooking_time: 45,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'salmon recipe 1',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 2,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'salmon',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'linguine',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'carbonara',
                    quantity: '0.05',
                    unit: 'l',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 30,
            cooking_time: 160,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'sardines on carvon!!',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'sardines',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'potatoes',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 5,
            cooking_time: 45,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 3',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'potatoes',
                    quantity: 0.4,
                    unit: 'kg',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 15,
            cooking_time: 20,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 4',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 10,
            cooking_time: 10,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 5',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 5,
            cooking_time: 5,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 6',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 20,
            cooking_time: 20,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 7',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 15,
            cooking_time: 25,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'tuna recipe 8',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 2,
            cooking_time: 8,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
        {
            name: 'test recipe',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
            servings: 4,
            categories : [
                {
                    name: 'fish'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 0.15,
                    unit: 'kg',
                },
                {
                    name: 'pasta',
                    quantity: 0.4,
                    unit: 'kg',
                },
                {
                    name: 'olive oil',
                    quantity: 'n/a',
                    unit: 'ts',
                },
            ],
            minimum_availability : {
                value: 20,
                new_value: 20,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
            is_favourite: false,
            preparation_time: 20,
            cooking_time: 20,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
                {
                    number: 3,
                    time: 10,
                    description: "Bla bla bla bla bla."
                },
            ],
        },
    ];
};

export default recipes;
