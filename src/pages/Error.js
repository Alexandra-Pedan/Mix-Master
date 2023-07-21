import { Link, useRouteError } from 'react-router-dom'
import img from '../images/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="container">
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/" className="waves-effect waves-light btn">
          back home
        </Link>
      </div>
    )
  }
  return (
    <div className="error">
      <h1>something went wrong </h1>
    </div>
  )
}
export default Error
