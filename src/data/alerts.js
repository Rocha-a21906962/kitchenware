
/* bogus alert data */
const alert_data = () => {
    return {
        ingredients: [
            {
                name: "rice",
                type: 'warning',
                message: [
                    "rice is running out!"
                ],
                popup: true,
                read: true,
                created_on: new Date(),
            },
        ],
        recipes: [
            {
                name: "tuna recipe 99",
                type: 'warning',
                message: [
                    "tuna recipe 99's ingredients are running out!"
                ],
                popup: true,
                read: true,
                created_on: new Date(),
            },
        ],
        orders: [
            {
                name: "XXX",
                type: 'info',
                message: [
                    "Order XXX has been confirmed."
                ],
                popup: false,
                read: true,
                created_on: new Date(),
            },
        ],
        meals: [
            {
                name: "tuna recipe 99",
                type: 'info',
                message: [
                    "Time to start preparing tuna recipe 99 for XX:XX."
                ],
                popup: false,
                read: true,
                created_on: new Date(),
            },
        ],
        user_defined: [
            // {
            //     name: "rice",
            //     message: "rice is running out!",
            //     popup: false,
            //     read: false,
                // created_on: new Date(),
            // },
        ],
        tools: [
            {
                name: "silverware",
                type: 'info',
                message: [
                    "There isn't enough clean silverware for today's expected number of meals.",
                ],
                popup: false,
                read: true,
                created_on: new Date(),
            },
        ],
        devices: [
            {
                name: "washing machine",
                type: 'warning',
                message: [
                    "The washing machine appears to be malfunctioning.",
                    "Technical assistance might be required.",
                ],
                popup: false,
                read: true,
                created_on: new Date(),
            },
        ],
    };
    // return [
    //     {
    //       type: 'ingredient',
    //       description: 'pop-up: order ingredient',
    //     },
    //     {
    //       type: 'ingredient',
    //       description: 'pop-up: order history',
    //     },
    //     {
    //       type: 'recipe',
    //       description: 'pop-up: order missing recipe ingredients',
    //     },
    //     {
    //       type: 'orders',
    //       description: 'pop-up: view order',
    //     },
    //     {
    //       type: 'orders',
    //       description: 'pop-up: new order',
    //     },
    // ];
};

export default alert_data;