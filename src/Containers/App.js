import React, { Component } from 'react';
import CardList from '../Components/CardList';
import { robots } from '../robots';
import SearchBox from '../Components/SarchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <>
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;