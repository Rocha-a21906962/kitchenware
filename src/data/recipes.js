

/* recipe data */
const recipes = () => {
    return [
        {
            name: 'tuna recipe 1',
            image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
                    quantity: '50',
                    unit: 'ml',
                },
            ],
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
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
            is_favourite: false,
        },
    ];
};

export default recipes;