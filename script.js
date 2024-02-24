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

const nutriScoreMap = {
    "Qualidade nutricional muito boa": "A",
    "Qualidade nutricional boa": "B",
    "Qualidade nutricional média": "C",
    "Qualidade nutricional baixa": "D",
    "Impacto ambiental alto": "E",
    "Faltam dados para calcular o Nutri-Score": "Dado não encontrado",
};

const novaScoreMap = {
    "Alimentos não processados ​​ou minimamente processados": "1",
    "Ingredientes culinários processados": "2",
    "Alimentos processados": "3",
    "Alimentos ultra-processados": "4",
    "Nível desconhecido de processamento do alimento": "Dado não encontrado",
};
const ecoScoreMap = {
    "Impacto ambiental muito baixo": "A",
    "Baixo impacto ambiental": "B",
    "Impacto ambiental moderado": "C",
    "Má qualidade nutricional": "D",
    "Impacto ambiental desconhecido": "Dado não encontrado",
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

const mapAttribute = (text, map) => {
    return {
        classification: hasValue(map[text]),
        cause: hasValue(text),
    };
};

const productObj = {
    usedName: hasValue(usedName?.innerHTML),
    name: hasValue(productName?.innerHTML),
    brands: hasValue(brands),
    attributes: {
        nova1: mapAttribute(nova1?.innerHTML, novaScoreMap),
        nutriScore: mapAttribute(nutriScore?.innerHTML, nutriScoreMap),
        ecoScore: mapAttribute(ecoScore?.innerHTML, ecoScoreMap),
    },
    quantity: hasValue(quantity?.innerHTML),
    ingredients: formatIngredients(ingredients.innerHTML),
};

console.log(productObj);
