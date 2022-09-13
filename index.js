// const ramenMenu = document.getElementById('ramen-menu')
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then((response) => response.json())
    .then((cocktailArray) => {
        cocktailArray.drinks.forEach((drink) => {
            appendCocktailToMenu(drink);
        });
    });
function appendCocktailToMenu(drinkObj) {
       const imageDomElement = document.createElement('img');
        imageDomElement.src = drinkObj.drinks.strImageSource;
        imageDomElement.addEventListener('click', () => {
            const posterImage = document.querySelector("#ramen-detail .detail-image");
            posterImage.src = drinkObj.drinks.strImageSource;
            const posterName = document.querySelector("ramen-detail .name");
            posterName.textContent = drinkObj.drinks.strDrink;
    //will append <li> to ul in html
        });
        ramenMenu.append(imageDomElement)
    console.log(drinkObj);
}