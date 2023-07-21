import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import CocktailList from '../components/CocktailList'
// import Preloader from '../components/Preloader'
import SearchForm from '../components/SearchForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return { drinks: response.data.drinks, searchTerm }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()
  return (
    <>
      <ToastContainer />
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}
export default Landing
