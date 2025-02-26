enum PizzaSize {
    Small,
    Medium,
    Large,
    Familie
};

enum PizzaIngredients {
    Cheese,
    Onion, 
    Salami,
    Corn
};

type Pizza = {
    size: PizzaSize,
    ingredients: PizzaIngredients[]
}

const pizzaSalamiLarge: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami]
};

const pizzaSalamiSmall: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami]
};

const pizzaHouseSmall: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Onion, PizzaIngredients.Corn]
}

const pizzaHouseFamilie: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Salami, PizzaIngredients.Onion, PizzaIngredients.Corn]
}