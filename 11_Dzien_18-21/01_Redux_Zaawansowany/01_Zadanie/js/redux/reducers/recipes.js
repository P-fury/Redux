import {ADD_RECIPES} from "../actions/recipes";

const fakeRecipes = [
    {
        id: 1,
        name: "Pomidorówkaaa",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [1, 2, 3]
    },
    {
        id: 2,
        name: "Coś innego",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [3, 1]
    },
    {
        id: 3,
        name: "Jeszcze inny przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    },
    {
        id: 4,
        name: "Jeszcze ddddinny przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    },
    {
        id: 5,
        name: "Jeszcze innyfdsfgfd przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    },
    {
        id: 6,
        name: "hdfghdfghdfgs",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    },
    {
        id: 7,
        name: "Jeszcze inny przepis",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
        products: [5, 6]
    },

];
const addRecipe = (state = fakeRecipes ,{type,payload}) => {
    switch (type) {
        case ADD_RECIPES: {
            const id = state.length + 1
            return [...state, {id, desc:payload.desc, name:payload.name,products: payload.products,}];
        }
        default:{
            return state;
        }
    }
}



export default addRecipe;