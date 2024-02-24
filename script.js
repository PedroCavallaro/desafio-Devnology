const productName = document.querySelector(
    "#field_generic_name > .field_value > [itemprop='description']"
);

const attributes = document.querySelectorAll(".attr_text > span");
const ingredients = document.querySelector(".panel_text");
const usedName = document.querySelector(".title-1");
const quantity = document.querySelector("#field_quantity > .field_value");
const brands = Array.from(
    document.querySelectorAll("[itemprop='brand']"),
    (brand) => brand.innerHTML
);
const [nutriScore, nova1, ecoScore] = attributes;

const novaScoreMap = {
    "": "A",
};

const hasValue = (value) => {
    if (typeof value === "undefined" || value.length === 0) {
        return "Dado não encontrado";
    }
    return value;
};

const formatIngredients = (ingredientsString) => {
    if (hasValue(ingredientsString)) {
        return String(ingredientsString).trim().split("\n");
    }
    return "Dado não encontrado";
};

const productObj = {
    usedName: hasValue(usedName?.innerHTML),
    name: hasValue(productName?.innerHTML),
    brands: hasValue(brands),
    attributes: {
        nova1: hasValue(nutriScore?.innerHTML),
        nutriScore: hasValue(nova1?.innerHTML),
        ecoScore: hasValue(ecoScore?.innerHTML),
    },
    quantity: hasValue(quantity?.innerHTML),
    ingredients: formatIngredients(ingredients.innerHTML),
};

console.log(productObj);
