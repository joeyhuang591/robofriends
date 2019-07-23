import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch(
            'https://jsonplaceholder.typicode.com/users'
          )
            .then(res => res.json())
            .then(users => {
              console.log(users)
              this.setState({robots: users})
            })
            .catch(e => console.log('Error:', e))
    }

 
    render() {
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(robots.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                        
                    </Scroll>
                    
                </div>
    
            );
        }


    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);