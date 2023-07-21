import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  About,
  HomeLayout,
  Error,
  Landing,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/Newsletter'

const homepageUrl = 'https://Alexandra-Pedan.github.io/Mix-Master'

const router = createBrowserRouter([
  {
    basename: homepageUrl,
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
