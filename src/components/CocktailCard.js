import { Link, useOutletContext } from 'react-router-dom'
const CocktailCard = ({ image, name, id, info, glass }) => {
  // const data = useOutletContext();
  // console.log(data);
  return (
    // <div className="container">
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={image} alt={name} />
            <span className="card-title">{name}</span>
          </div>
          <div className="card-content">
            <span className="card-title">{glass}</span>
            <p>{info}</p>
          </div>
          <div className="card-action">
            <Link to={`/cocktail/${id}`} className="btn">
              details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CocktailCard
