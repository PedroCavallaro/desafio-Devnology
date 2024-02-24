<h2>Desafio Pedro Cavallaro</h2>
<h2>Objeto</h2>
<p>Para este desafio, julguei que as informações mais importantes para se ter no objeto são: Nome utilizado, nome genérico, classificações,
    marcas, ingredientes e a quantidade utilizada para métrica. Exemplo do objeto:
</p>

``` javascript  
const productObj = {
    genericName: "Alimento achocolatado em pó",
    usedName: "Nescau 2.0 - Nestlé - 200",
    usedQuantity: "200 g",
    attributes: {
        nova1: {
            classification: "4",
            cause: "Alimentos ultra-processados"
        },
        ecoScore: {
            cause: "Impacto ambiental alto",
            classification: "D"
        },
        nutriScore: {
            classification: "Dado não encontrado",
            cause: "Faltam dados para calcular o Nutri-Score"
        },
    brands: ["Nestlé", "Nescau"],
    ingredients: ["Áçucar", "cacau em pó"]
```

<h2>Seletores e váriaveis</h2>

<ul>
    <li>productName: Extrai o nome do produto da página da web.</li>
    <li>attributes: Extrai vários atributos como pontuação nutricional, pontuação ecológica, etc.</li>
    <li>ingredients: Extrai a string de ingredientes do produto.</li>
    <li>usedQuantity: Extrai a quantidade do ingrediente</li>
    <li>usedName: Titulo do produto</li>
    <li>categories: Extrai as categorias do produto</li>
    <li>brands: Extrai as marcas do produto</li>
</ul>

<h2>Classificação</h2>
<p>Para definir a classificação do produto, decidi criar um map para cada avalidor, assim é possível definir a classificação e a causa</p>

``` javascript 
const nutriScoreMap = {
    "Qualidade nutricional muito boa": "A",
    "Qualidade nutricional boa": "B",
    "Qualidade nutricional média": "C",
    "Qualidade nutricional baixa": "D",
    "Má qualidade nutricional": "E",
    "Faltam dados para calcular o Nutri-Score": "Dado não encontrado",
}
const novaScoreMap = {
    "Alimentos não processados ​​ou minimamente processados": "1",
    "Ingredientes culinários processados": "2",
    "Alimentos processados": "3",
    "Alimentos ultra-processados": "4",
    "Nível desconhecido de processamento do alimento": "Dado não encontrado",
}
const ecoScoreMap = {
    "Impacto ambiental muito baixo": "A",
    "Baixo impacto ambiental": "B",
    "Impacto ambiental moderado": "C",
    "Impacto ambiental alto": "D",
    "Impacto ambiental desconhecido": "Dado não encontrado",
}
```
<h2>Funções utilizadas</h2>

<li>hasValue: Verifica se um valor existe ou retorna uma mensagem padrão "Dado não encontrado".</li>

``` javascript    
    const hasValue = (value) => {
    if (typeof value === "undefined" || value.length === 0) {
        return "Dado não encontrado";
    }
    return value;
    };
```

<li>formatIngredients: Formata a string de ingredientes, removendo os elementos e texto indesejado, e transforma a String em um Array.</li>
        
``` javascript
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
```

<li>mapAttribute: Mapeia o valor do atributo para uma classificação e causa.</li>

``` javascript
    const mapAttribute = (text, map) => {
        return {
            classification: hasValue(map[text]),
            cause: hasValue(text),
        };
    };
```






           






