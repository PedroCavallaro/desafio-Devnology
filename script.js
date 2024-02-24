const productName = document.querySelector(
    "#field_generic_name > .field_value > [itemprop='description']"
);

const brands = document.querySelectorAll("[itemprop='brand']");
const attributes = document.querySelectorAll(".attr_text > span");
const ingredients = document.querySelector(".panel_text").value;

const hasValue = (value) => {
    if (!value) {
        return "Dado não encontrado";
    }
    return value;
};

const productObj = {
    name: "",
    brands: [],
    attributes: {
        nova1: "",
        nutriScore: "",
        ecoScore: "",
    },
    quantity: "",
    ingredients: [],
};

const [nutriScore, nova1, ecoScore] = attributes;
