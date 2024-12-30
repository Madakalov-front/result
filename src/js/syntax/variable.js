
export const infoStudent = () => {
    const myName = "Egor",
    mySurname = "Madakalov",
    myFavoriteDrink = "Coffee",
    myFavoriteAnimal = "Cat",
    myFavoriteProgrammingLanguage = "JS";
    
    const arrInfo = [myName, mySurname, myFavoriteDrink, myFavoriteAnimal, myFavoriteProgrammingLanguage]

    for( const item of arrInfo) {
        console.log(item)
    }
}