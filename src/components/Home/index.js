import {Component} from 'react'
import MovieList from '../MovieList'
import './index.css'
const Api_key = 'c45a857c193f6302f2b5061c3b85e743'
class Home extends Component {
  state = {popularMovies: []}
  componentDidMount() {
    this.getUpdateData()
  }

  getUpdateData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`,
    )
    const data = await response.json()
    const result = data.results
    console.log(result)
    const updateMovisList = result.map(eachItem => ({
      id: eachItem.id,
      rating: eachItem.vote_average,
      imageUrl: eachItem.poster_path,
      title: eachItem.title,
      backDropPath: eachItem.backdrop_path,
      originalTitle: eachItem.originalTitle,
    }))
    this.setState({popularMovies: updateMovisList})
  }

  render() {
    const {popularMovies} = this.state
    console.log(popularMovies)
    return (
      <ul className="image-container">
        {popularMovies.map(eachItems => (
          <MovieList movieDetails={eachItems} />
        ))}
      </ul>
    )
  }
}
export default Home
