import {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/popular" component={Home} />
          <Route exact path="/top_rated" component={TopRated} />
          <Route exact path="/upcoming" component={Upcoming} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
