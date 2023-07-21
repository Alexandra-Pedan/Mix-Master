import CocktailCard from './CocktailCard'
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4> No matching cocktails found...</h4>
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <>
      <ul>
        {formattedDrinks.map((item) => {
          return (
            <li key={item.id} className="cocktail-item ">
              <CocktailCard key={item.id} {...item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default CocktailList
