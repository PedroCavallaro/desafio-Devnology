const productName = document.querySelector(
    "#field_generic_name > .field_value > [itemprop='description']"
);
const attributes = document.querySelectorAll(".attr_text > span");
const ingredients = document.querySelector(".panel_text");
const usedName = document.querySelector(".title-1");
const usedQuantity = document.querySelector("#field_quantity > .field_value");
const categories = Array.from(
    document.querySelectorAll(
        "#field_categories > .field_value > .tag.well_known"
    ),
    (categorie) => categorie.innerHTML
);
const brands = Array.from(
    document.querySelectorAll("[itemprop='brand']"),
    (brand) => brand.innerHTML
);

console.log(categories);
const [nutriScore, nova1, ecoScore] = attributes;

const nutriScoreMap = {
    "Qualidade nutricional muito boa": "A",
    "Qualidade nutricional boa": "B",
    "Qualidade nutricional média": "C",
    "Qualidade nutricional baixa": "D",
    "Má qualidade nutricional": "E",
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
    "Impacto ambiental alto": "D",
    "Impacto ambiental desconhecido": "Dado não encontrado",
};

const hasValue = (value) => {
    if (!value || value.length === 0) {
        return "Dado não encontrado";
    }
    return value;
};

const formatIngredients = (ingredientsString) => {
    if (hasValue(ingredientsString)) {
        const ingredientsArray = String(ingredientsString)
            .trim()
            .replace(/[:;]/g, ",")
            .replace(/<span class="allergen">/g, "")
            .replace(/<\/span>/g, "")
            .replace(/<strong>/g, "")
            .replace(/<\/strong>/g, "")
            .replace(
                /<!-- text is in a different language than the interface -->/g,
                ""
            )
            .split("\n")
            .join()
            .split(",");

        return ingredientsArray.filter((e) => e.trim() !== "");
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
    genericName: hasValue(productName?.innerHTML),
    brands: hasValue(brands),
    categories: hasValue(categories),
    attributes: {
        nova1: mapAttribute(nova1?.innerHTML, novaScoreMap),
        nutriScore: mapAttribute(nutriScore?.innerHTML, nutriScoreMap),
        ecoScore: mapAttribute(ecoScore?.innerHTML, ecoScoreMap),
    },
    usedQuantity: hasValue(usedQuantity?.innerHTML),
    ingredients: formatIngredients(ingredients.innerHTML),
};

console.log(productObj);
