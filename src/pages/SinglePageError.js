import { useRouteError } from 'react-router-dom'

const SinglePageError = () => {
  const error = useRouteError()
  return (
    <div className="error">
      <h2>There was an error...</h2>
    </div>
  )
}
export default SinglePageError
