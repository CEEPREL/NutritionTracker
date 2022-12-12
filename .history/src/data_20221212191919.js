import { nanoid } from "nanoid";
const food_data = {
    food_data: [
        {
            id: nanoid(),
            name: "Chicken Breast",
            size: 200,
            protein: 25,
            category: "lunch",
            image: 'https://picsum.photos/id/190/2400/1600/'
        }, {
            id: nanoid(),
            name: "Egg",
            size: 50,
            protein: 6,
            category: "breakfast",
            image: 'https://picsum.photos/id/170/2400/1600/'
        }, {            
            id: nanoid(),
            name: "Protein Oats",
            size: 200,
            protein: 15,
            category: "breakfast",
            image: 'https://picsum.photos/id/180/2400/1600/'
        }, {
            id: nanoid(),
            name: "Protein Yogurt",
            size: 200,
            protein: 25,
            category: "breakfast",
            image: 'https://picsum.photos/id/170/2400/1600/'
        }, {
            id: nanoid(),
            name: "Protein Shake",
            size: 200,
            protein: 25,
            category: "lunch",
            image: 'https://picsum.photos/id/130/2400/1600/'
        }
    ],
};

export default data;