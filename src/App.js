import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'
// import { robots } from './robots';

function App() {
    // constructor () {
    //     super()
    //     this.state= {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    //Hooks//
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

// componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response=> response.json())
//     .then(users => {this.setState({robots: users})});
// }

//useEffect//
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
}, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            

        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
            );
        }
    }

export default App;