
/* bogus alert data */
const alert = () => {
    return [
        {
          type: 'ingredient',
          description: 'pop-up: order ingredient',
        },
        {
          type: 'ingredient',
          description: 'pop-up: order history',
        },
        {
          type: 'recipe',
          description: 'pop-up: order missing recipe ingredients',
        },
        {
          type: 'orders',
          description: 'pop-up: view order',
        },
        {
          type: 'orders',
          description: 'pop-up: new order',
        },
    ];
};

export default alerts;