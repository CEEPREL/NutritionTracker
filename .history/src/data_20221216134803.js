import { nanoid } from "nanoid";
const data = {
    food_data: [
        {
            id: nanoid(),
            name: "Chicken Breast",
            serving: 200,
            calories: 500,
            protein: 25,
            category: "lunch",
            sugar: 4,
            image: 'https://picsum.photos/id/190/2400/1600/'
        }, {
            id: nanoid(),
            name: "Egg",
            calories: 75,
            serving: 50,
            protein: 6,
            sugar: 4,
            category: "breakfast",
            image: 'https://picsum.photos/id/170/2400/1600/'
        }, {            
            id: nanoid(),
            name: "Protein Oats",
            calories: 500,
            serving: 200,
            protein: 15,
            sugar: 4,
            category: "breakfast",
            image: 'https://picsum.photos/id/180/2400/1600/'
        }, {
            id: nanoid(),
            name: "Protein Yogurt",
            calories: 500,
            serving: 200,
            protein: 25,
            sugar: 4,
            category: "breakfast",
            image: 'https://picsum.photos/id/170/2400/1600/'
        }, {
            id: nanoid(),
            name: "Protein Shake",
            calories: 500,
            serving: 200,
            protein: 25,
            sugar: 4,
            category: "lunch",
            image: 'https://picsum.photos/id/130/2400/1600/'
        }
    ],
};

export default data;