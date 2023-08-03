import {Link} from 'react-router-dom'

import './index.css'
const MovieList = props => {
  const {movieDetails} = props
  const {imageUrl, title, rating} = movieDetails
  return (
    <Link to="/" className="link">
      <li className="lists-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${imageUrl}`}
          alt={title}
          className="image"
        />
        <p>{title}</p>
        <p>Rating:{rating}</p>
      </li>
    </Link>
  )
}
export default MovieList
