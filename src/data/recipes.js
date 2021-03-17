

/* recipe data */
const recipes = () => {
    return [
        {
            name: 'tuna recipe',
            image: '/tuna_recipe.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'tuna',
                    quantity: 200,
                    unit: 'g',
                },
                {
                    name: 'rice',
                    quantity: 400,
                    unit: 'g',
                },
                {
                    name: 'salt',
                    quantity: 1,
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
                value: 3,
                new_value: 3,
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
            name: 'Spaghetti Bolognese',
            image: '/spaghetti_bolognese.jpg',
            categories : [
                {
                    name: 'meat'
                },
                {
                    name: 'italian'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'beef mince',
                    quantity: 500,
                    unit: 'g',
                },
                {
                    name: 'vegetable oil',
                    quantity: 1,
                    unit: 'tbsp',
                },
                {
                    name: 'bacon',
                    quantity: 100,
                    unit: 'g',
                },
                {
                    name: 'onion',
                    quantity: 100,
                    unit: 'g',
                },
                {
                    name: 'celery',
                    quantity: 50,
                    unit: 'g',
                },
                {
                    name: 'carrots',
                    quantity: 150,
                    unit: 'g',
                },
                {
                    name: 'garlic',
                    quantity: 20,
                    unit: 'g',
                },
                {
                    name: 'bay leaves',
                    quantity: 2,
                    unit: 'g',
                },
                {
                    name: 'red wine vinegar',
                    quantity: 4,
                    unit: 'tbsp',
                },
                {
                    name: 'oregano',
                    quantity: 1,
                    unit: 'tbsp',
                },
                {
                    name: 'tomatoes',
                    quantity: 400,
                    unit: 'g',
                },
{
                    name: 'mushrooms',
                    quantity: 150,
                    unit: 'g',
                },
{
                    name: 'salt',
                    quantity: 0.5,
                    unit: 'tsp',
                },
{
                    name: 'black pepper',
                    quantity: 0.5,
                    unit: 'tsp',
                },
{
                    name: 'spaghetti',
                    quantity: 400,
                    unit: 'g',
                },
            ],
            preparation_time: 35,
            cooking_time: 90,
            steps: [
                {
                    number: 1,
                    time: 2,
                    description: "Put the beef mince in a colander and rinse under the cold tap to separate it into smaller pieces. Drain well and pat dry with kitchen paper."
                },
                {
                    number: 2,
                    time: 60,
                    description: "Transfer the mince to a roasting tray and roast for 35-60 minutes, or until completely crisp and golden-brown. This intensifies the flavour and helps it to absorb the sauce ingredients. Drain off the fat."
                },
                {
                    number: 3,
                    time: 5,
                    description: "Heat the oil in a large, heavy-based casserole over a medium heat. Add the bacon and fry for 4-5 minutes, stirring from time to time, until the fat melts and the bacon starts to brown."
                },
                {
                    number: 4,
                    time: 5,
                    description: "Add the onion, celery, carrots, garlic and bay leaf and cook for 4-5 minutes, or until they begin to soften."
                },
                {
                    number: 5,
                    time: 45,
                    description: "Stir in the vinegar, then the sugar and oregano. Add the cooked mince, tomatoes, stock and mushrooms. Stir well and bring to the boil, then reduce the heat and simmer for 45-60 minutes, stirring occasionally, until thickened. Season, to taste, with salt and pepper, then set aside."
                },
                {
                    number: 6,
                    time: 8,
                    description: "Meanwhile, cook the spaghetti in a pan of boiling, salted water, stirring often with a fork, until just tender (al dente). Drain immediately in a colander, shaking it. To serve, twirl the spaghetti onto 4 plates. Spoon over the Bolognese sauce and garnish with Parmesan, if desired."
                },
            ], 
            servings: 4,
            minimum_availability : {
                value: 5,
                new_value: 5,
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
            name: 'Tomato Basil Salmon',
            image: '/tomato_basil_salmon.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'salmon',
                    quantity: 200,
                    unit: 'g',
                },
                {
                    name: 'basil',
                    quantity: 1,
                    unit: 'tbsp',
                },
                {
                    name: 'tomatoes',
                    quantity: 100,
                    unit: 'g',
                },
                {
                    name: 'olive oil',
                    quantity: 1,
                    unit: 'tbsp',
                },
                {
                    name: 'Parmesan cheese',
                    quantity: 20,
                    unit: 'g',
                },

            ],
            preparation_time: 10,
            cooking_time: 20,
            steps: [
                {
                    number: 1,
                    time: 10,
                    description: " Preheat oven to 375 degrees F (190 degrees C). Line a baking sheet with a piece of aluminum foil, and spray with nonstick cooking spray. Place the salmon fillets onto the foil, sprinkle with basil, top with tomato slices, drizzle with olive oil, and sprinkle with the Parmesan cheese."
                },
                {
                    number: 2,
                    time: 20,
                    description: " Bake in the preheated oven until the salmon is opaque in the center, and the Parmesan cheese is lightly browned on top, about 20 minutes."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Parmesan Chicken',
            image: '/parmesan_chicken.jpg',
            categories : [
                {
                    name: 'meat'
                },
                {
                    name: 'italian'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'bread crumbs',
                    quantity: 50,
                    unit: 'g',
                },
                {
                    name: 'Parmesan cheese',
                    quantity: 50,
                    unit: 'g',
                },
                {
                    name: 'basil',
                    quantity: 0.5,
                    unit: 'tbsp',
                },
                {
                    name: 'oregano',
                    quantity: 0.5,
                    unit: 'tbsp',
                },
                {
                    name: 'Eggs',
                    quantity: 1,
                    unit: '',
                },
                {
                    name: 'chicken breast',
                    quantity: 750,
                    unit: 'g',
                },
            ],
            preparation_time: 10,
            cooking_time: 35,
            steps: [
                {
                    number: 1,
                    time: 2,
                    description: "Preheat oven to 350 degrees F (175 degrees C)."
                },
                {
                    number: 2,
                    time: 8,
                    description: "In a medium bowl mix together the bread crumbs, Italian seasoning and Parmesan cheese. Dip chicken breasts in egg, then in bread crumb mixture to coat. Place coated chicken in a 9x13 inch baking dish."
                },
                {
                    number: 3,
                    time: 35,
                    description: "Bake in the preheated oven for 30 to 35 minutes or until juices run clear, turning over chicken 5 minutes before removing from oven."
                },
                {
                    number: 4,
                    time: 15,
                    description: "Transfer the beef to a warm platter, cover loosely with foil and leave to rest for at least 20 minutes, and anything up to 40 minutes, before serving."
                },
            ], 
            servings: 5,
            minimum_availability : {
                value: 2,
                new_value: 2,
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
            name: 'Salmon Tikka',
            image: '/salmon_tikka.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'salmon',
                    quantity: 250,
                    unit: 'g',
                },
                {
                    name: 'ground turmeric',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'salt',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'red pepper',
                    quantity: 2,
                    unit: 'tsp',
                },
                {
                    name: 'cornstarch',
                    quantity: 2,
                    unit: 'tsp',
                },
{
                    name: 'vegetable oil',
                    quantity: 4,
                    unit: 'tbsp',
                },
            ],
            preparation_time: 20,
            cooking_time: 15,
            steps: [
                {
                    number: 1,
                    time: 18,
                    description: "Mix together the cayenne, turmeric, and salt in a bowl. Add the salmon to the bowl and toss to coat. Allow to sit 15 minutes."
                },
                {
                    number: 2,
                    time: 2,
                    description: "Heat the oil in a skillet over medium-high heat. While the oil is heating, sprinkle the cornstarch over the salmon and again toss to coat."
                },
                {
                    number: 3,
                    time: 15,
                    description: "Cook the salmon in the heated oil until golden brown, about 1 minute per side."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Honey-Dijon Chicken',
            image: '/honey_dijon_chicken.jpg',
            categories : [
                {
                    name: 'meat'
                },
                {
                    name: 'chicken'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'chicken breast',
                    quantity: 600,
                    unit: 'g',
                },
                {
                    name: 'red pepper',
                    quantity: 2,
                    unit: 'tsp',
                },
                {
                    name: 'honey',
                    quantity: 6,
                    unit: 'tbsp',
                },
{
                    name: 'Dijon mustard',
                    quantity: 6,
                    unit: 'tbsp',
                },

            ],
            preparation_time: 5,
            cooking_time: 40,
            steps: [
                {
                    number: 1,
                    time: 1,
                    description: "Preheat oven to 350 degrees F (175 degrees C)."
                },
                {
                    number: 2,
                    time: 4,
                    description: "Place chicken breasts in a baking dish; sprinkle with red pepper flakes. Mix honey and mustard in a small bowl and pour mixture over chicken. Cover baking dish with aluminum foil."
                },
                {
                    number: 3,
                    time: 40,
                    description: "Bake in the preheated oven until the juices run clear and chicken is no longer pink inside, about 40 minutes. An instant-read meat thermometer inserted into the thickest part of a breast should read at least 160 degrees F (70 degrees C)."
                },
            ], 
            servings: 4,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Spicy Mexican-American Chicken',
            image: '/spicy_mexican_american_chicken.jpg',
            categories : [
                {
                    name: 'meat'
                },
                {
                    name: 'chicken'
                },
{
                    name: 'mexican'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'food'
                },

            ],
            ingredients : [
                {
                    name: 'chicken thighs',
                    quantity: 400,
                    unit: 'g',
                },
                {
                    name: 'red pepper',
                    quantity: 2,
                    unit: 'tsp',
                },
                {
                    name: 'paprika',
                    quantity: 1,
                    unit: 'tbsp',
                },
{
                    name: 'brown sugar',
                    quantity: 1,
                    unit: 'tbsp',
                },
{
                    name: 'Mexican-style hot sauce',
                    quantity: 4,
                    unit: 'tbsp',
                },


            ],
            preparation_time: 5,
            cooking_time: 40,
            steps: [
                {
                    number: 1,
                    time: 2,
                    description: "Preheat oven to 400 degrees F (200 degrees C). Grease a small baking dish."
                },
                {
                    number: 2,
                    time: 3,
                    description: "Mix the hot sauce, paprika, ground cayenne pepper, and brown sugar in a bowl, and stir until the mixture is well combined. Place the chicken thighs in the baking dish, and coat them with a layer of sauce. Cover the dish with foil."
                },
                {
                    number: 3,
                    time: 40,
                    description: "Bake in the preheated oven for 20 minutes. Remove the foil, and bake until the chicken has cooked through, and the sauce has thickened and started to brown, about 20 more minutes."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 5,
                new_value: 5,
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
            name: 'Cauliflower Soup',
            image: '/cauliflower_soup.jpg',
            categories : [
                {
                    name: 'Soups'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'gluten free'
                },
                {
                    name: 'vegetarian'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'olive oil',
                    quantity: 3,
                    unit: 'tbsp',
                },
                {
                    name: 'onion',
                    quantity: 170,
                    unit: 'g',
                },
                {
                    name: 'salt',
                    quantity: 1,
                    unit: 'tsp',
                },
                {
                    name: 'black pepper',
                    quantity: 1,
                    unit: 'tsp',
                },
{
                    name: 'water',
                    quantity: 5.5,
                    unit: 'cup',
                },
{
                    name: 'cauliflower',
                    quantity: 1500,
                    unit: 'g',
                },


            ],
            preparation_time: 7,
            cooking_time: 75,
            steps: [
                {
                    number: 1,
                    time: 15,
                    description: "Warm the olive oil in a heavy-bottomed pan. Sweat the onion in the olive oil over low heat without letting it brown for 15 minutes."
                },
                {
                    number: 2,
                    time: 20,
                    description: "Add the cauliflower, salt to taste, and 1/2 cup water. Raise the heat slightly, cover the pot tightly and stew the cauliflower for 15 to 18 minutes, or until tender. Then add another 4 1/2 cups hot water, bring to a low simmer and cook an additional 20 minutes uncovered."
                },
                {
                    number: 3,
                    time: 20,
                    description: "Working in batches, purée the soup in a blender to a very smooth, creamy consistency. Let the soup stand for 20 minutes. In this time it will thicken slightly."
                },
                {
                    number: 4,
                    time: 25,
                    description: "Thin the soup with 1/2 cup hot water. Reheat the soup. Serve hot, drizzled with a thin stream of extra-virgin olive oil and freshly ground black pepper."
                },
   
            ], 
            servings: 8,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Cod with Lemon, Garlic, and Chives',
            image: '/cod_with_lemon.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'cod',
                    quantity: 600,
                    unit: 'g',
                },
                {
                    name: 'olive oil',
                    quantity: 2,
                    unit: 'tbsp',
                },
                {
                    name: 'salt',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'black pepper',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'chives',
                    quantity: 50,
                    unit: 'g',
                },
{
                    name: 'lemons',
                    quantity: 2,
                    unit: '',
                },
{
                    name: 'garlic',
                    quantity: 15,
                    unit: 'g',
                },



            ],
            preparation_time: 15,
            cooking_time: 15,
            steps: [
                {
                    number: 1,
                    time: 1,
                    description: "Preheat oven to 400 degrees F (200 degrees C)."
                },
                {
                    number: 2,
                    time: 14,
                    description: "Cut 4 large squares of heavy-duty aluminum foil. Brush each fillet with olive oil and sprinkle with salt and black pepper. Place each fillet in the center of an aluminum foil square. Lay lemon slices down the length of each fillet and sprinkle garlic slices and chives over the top. Fold foil over the fish and turn the edges over 2 or 3 times; flatten to seal the packets."
                },
                {
                    number: 3,
                    time: 15,
                    description: "Bake in the preheated oven until the fish is opaque and flakes easily with a fork, 15 to 20 minutes."
                },
            ], 
            servings: 4,
            minimum_availability : {
                value: 5,
                new_value: 5,
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
            name: 'Parchment Baked Salmon',
            image: '/parchment_baked_salmon.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'salmon',
                    quantity: 250,
                    unit: 'g',
                },
                {
                    name: 'salt',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'black pepper',
                    quantity: 0.5,
                    unit: 'tsp',
                },

                {
                    name: 'basil',
                    quantity: 2,
                    unit: 'tbsp',
                },
                {
                    name: 'olive oil',
                    quantity: 2,
                    unit: 'tbsp',
                },
                {
                    name: 'lemons',
                    quantity: 1,
                    unit: '',
                },
            ],
            preparation_time: 15,
            cooking_time: 25,
            steps: [
                {
                    number: 1,
                    time: 2,
                    description: "Place an oven rack in the lowest position in oven and preheat oven to 400 degrees F (200 degrees C)."
                },
                {
                    number: 2,
                    time: 10,
                    description: "Place salmon fillet with skin side down in the middle of a large piece of parchment paper; season with salt and black pepper. Cut 2 3-inch slits into the fish with a sharp knife. Stuff chopped basil leaves into the slits. Spray fillet with cooking spray and arrange lemon slices on top."
                },
                {
                    number: 3,
                    time: 3,
                    description: "Fold edges of parchment paper over the fish several times to seal into an airtight packet. Place sealed packet onto a baking sheet."
                },
                {
                    number: 4,
                    time: 25,
                    description: "Bake fish on the bottom rack of oven until salmon flakes easily and meat is pink and opaque with an interior of slightly darker pink color, about 25 minutes. An instant-read meat thermometer inserted into the thickest part of the fillet should read at least 145 degrees F (65 degrees C). To serve, cut the parchment paper open and remove lemon slices before plating fish."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Baked Salmon Fillets Dijon',
            image: '/baked_salmon_fillets_dijon.jpg',
            categories : [
                {
                    name: 'fish'
                },
                {
                    name: 'food'
                },
            ],
            ingredients : [
                {
                    name: 'salmon',
                    quantity: 450,
                    unit: 'g',
                },
                {
                    name: 'Dijon mustard',
                    quantity: 3,
                    unit: 'tbsp',
                },     
{
                    name: 'salt',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'black pepper',
                    quantity: 0.5,
                    unit: 'tsp',
                },
                {
                    name: 'bread crumbs',
                    quantity: '35',
                    unit: 'g',
                },
{
                    name: 'butter',
                    quantity: '35',
                    unit: 'g',
                },

            ],
            preparation_time: 10,
            cooking_time: 15,
            steps: [
                {
                    number: 1,
                    time: 4,
                    description: "Preheat oven to 400 degrees F (200 degrees C). Line a shallow baking pan with aluminum foil."
                },
                {
                    number: 2,
                    time: 6,
                    description: "Place salmon skin-side down on foil. Spread a thin layer of mustard on the top of each fillet, and season with salt and pepper. Top with bread crumbs, then drizzle with melted butter."
                },
                {
                    number: 3,
                    time: 15,
                    description: "Bake in a preheated oven for 15 minutes, or until salmon flakes easily with a fork."
                },
            ], 
            servings: 4,
            minimum_availability : {
                value: 1,
                new_value: 1,
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
            name: 'Strawberry sunrise',
            image: '/strawberry_sunrise.webp',
            categories : [
                {
                    name: 'Smoothies'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'drinks'
                },
            ],
            ingredients : [
                {
                    name: 'skimmed milk',
                    quantity: 125,
                    unit: 'ml',
                },
                {
                    name: 'bananas',
                    quantity: 1,
                    unit: '',
                },
                {
                    name: 'strawberries',
                    quantity: 75,
                    unit: 'g',
                },
            ],
            preparation_time: 5,
            cooking_time: 1,
            steps: [
                {
                    number: 1,
                    time: 5,
                    description: "Put all the ingredients in a blender and whizz for 1 min until smooth."
                },
                {
                    number: 2,
                    time: 1,
                    description: "Pour the smoothie into two glasses to serve."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 5,
                new_value: 5,
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
            name: 'Avocado delight',
            image: '/avocado_delight.jpg',
            categories : [
                {
                    name: 'Smoothies'
                },
                {
                    name: 'healthy'
                },
                {
                    name: 'vegetarian'
                },
                {
                    name: 'drinks'
                },
            ],
            ingredients : [
                {
                    name: 'skimmed milk',
                    quantity: 250,
                    unit: 'ml',
                },
                {
                    name: 'bananas',
                    quantity: 1,
                    unit: '',
                },
                {
                    name: 'avocado',
                    quantity: 75,
                    unit: 'g',
                },
            ],
            preparation_time: 5,
            cooking_time: 1,
            steps: [
                {
                    number: 1,
                    time: 5,
                    description: "Put all the ingredients in a blender and whizz for 1 min until smooth."
                },
                {
                    number: 2,
                    time: 1,
                    description: "Pour the smoothie into two glasses to serve."
                },
            ], 
            servings: 2,
            minimum_availability : {
                value: 5,
                new_value: 5,
                min_input: 0,
                max_input: 100,
                step: 1,
            },
            auto_order_ingredients : {
                value: false,
                new_value: false,
            },
        },






        // {
        //     name: 'tuna recipe 1',
        //     image: '',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //         {
        //             name: 'healthy'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.2,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'rice',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'salt',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     preparation_time: 30,
        //     cooking_time: 60,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 2,
        //             description: "Rub the garlic halves and thyme leaves all over the beef. Place the joint in a large dish, drizzle over the olive oil, then rub it into the meat all over. Cover and leave to marinate in the fridge for 1–2 days before you cook it (you don’t have to marinate the beef in advance, but it does make it super tasty! – see Tip). Take the beef out of the fridge about an hour before cooking, to let it come up to room temperature."
        //         },
        //         {
        //             number: 2,
        //             time: 6,
        //             description: "Preheat the oven to 190°C/170°C fan/Gas 5."
        //         },
        //         {
        //             number: 3,
        //             time: 20,
        //             description: "Preheat a dry frying pan until very hot, then sear the beef over a high heat until it’s coloured on all sides. Place the beef in a large, hob-proof roasting tray with the garlic halves and the thyme sprig and roast for about 45 minutes for medium rare (or until it reaches 45–47°C in the centre, if you have a meat thermometer). Add 10–12 minutes for medium (or until it reaches 55–60°C in the centre), or add about 20 minutes if you like it well done (or until it reaches 65–70°C in the centre)."
        //         },
        //         {
        //             number: 4,
        //             time: 15,
        //             description: "Transfer the beef to a warm platter, cover loosely with foil and leave to rest for at least 20 minutes, and anything up to 40 minutes, before serving."
        //         },
        //         {
        //             number: 5,
        //             time: 45,
        //             description: "Meanwhile, to make the gravy, place the roasting tray over a low heat on the hob, add the onions to the juices in the tray and cook gently for about 20 minutes, stirring occasionally, until really soft and caramelised. Stir in the flour until combined, then whisk in the red wine, making sure there are no lumps. Bring to the boil, whisking, then bubble rapidly until the red wine has reduced by half. Stir in the hot stock, then cook over a medium heat for about 8 minutes, stirring occasionally, until reduced to a thick gravy."
        //         },
        //         {
        //             number: 6,
        //             time: 2,
        //             description: "Carve the beef thinly and pour the gravy into a warm jug. Serve with Yorkshire Puddings and steamed chard."
        //         },
        //     ], 
        //     servings: 4,
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        // },


        // {
        //     name: 'cod recipe 1',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'cod',
        //             quantity: 0.2,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'potatoes',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'salt',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 10,
        //     cooking_time: 20,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'cod recipe 2',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'cod',
        //             quantity: 0.2,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'potatoes',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 5,
        //     cooking_time: 30,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 2',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.2,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'potatoes',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olives',
        //             quantity: '50',
        //             unit: 'g',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 15,
        //     cooking_time: 45,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'salmon recipe 1',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 2,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'salmon',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'linguine',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'carbonara',
        //             quantity: '0.05',
        //             unit: 'l',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 30,
        //     cooking_time: 160,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'sardines on carvon!!',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'sardines',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'potatoes',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 5,
        //     cooking_time: 45,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 3',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'potatoes',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 15,
        //     cooking_time: 20,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 4',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 10,
        //     cooking_time: 10,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 5',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 5,
        //     cooking_time: 5,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 6',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 20,
        //     cooking_time: 20,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 7',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 15,
        //     cooking_time: 25,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'tuna recipe 8',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 2,
        //     cooking_time: 8,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
        // {
        //     name: 'test recipe',
        //     image: 'https://entregaemcasa.pt/entregaemcasa/uploads/2020/03/arawfish3.png',
        //     servings: 4,
        //     categories : [
        //         {
        //             name: 'fish'
        //         },
        //     ],
        //     ingredients : [
        //         {
        //             name: 'tuna',
        //             quantity: 0.15,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'pasta',
        //             quantity: 0.4,
        //             unit: 'kg',
        //         },
        //         {
        //             name: 'olive oil',
        //             quantity: 'n/a',
        //             unit: 'ts',
        //         },
        //     ],
        //     minimum_availability : {
        //         value: 20,
        //         new_value: 20,
        //         min_input: 0,
        //         max_input: 100,
        //         step: 1,
        //     },
        //     auto_order_ingredients : {
        //         value: false,
        //         new_value: false,
        //     },
        //     is_favourite: false,
        //     preparation_time: 20,
        //     cooking_time: 20,
        //     steps: [
        //         {
        //             number: 1,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 2,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //         {
        //             number: 3,
        //             time: 10,
        //             description: "Bla bla bla bla bla."
        //         },
        //     ],
        // },
    ];
};

export default recipes;
