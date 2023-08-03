import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {seachInput: ''}

  onChangeInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {seachInput} = this.state
    console.log(seachInput)
    return (
      <div>
        <div className="header-container">
          <h1 className="logo-heading">MovieDb</h1>
          <ul className="un-header">
            <li>
              <Link to="/popular" className="list-container">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/top_rated" className="list-container">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="list-container">
                Upcoming
              </Link>
            </li>
            <input
              type="search"
              placeholder="Movie Name"
              className="input-container"
              onChange={this.onChangeInput}
            />
            <button type="button" className="button">
              Search
            </button>
            <p>{seachInput}</p>
          </ul>
        </div>
      </div>
    )
  }
}
export default Header
