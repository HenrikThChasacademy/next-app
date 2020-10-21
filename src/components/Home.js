import React, { Component, Fragment } from 'react';
import Todos from './Todos';
import todoService from '../api/todoService';

class Home extends Component {
    state= {
        todos:[],
        isLoading: true,
    };

    async componentDidMount() {
        const todoList = await todoService.getAll()
        this.setState({todos: todoList, isLoading: false});
    }

    render() {
        return(
            <Fragment>
                {
                    this.state.isLoading? 
                    <div>Loading</div>
                    :
                    <Todos todoList = {this.state.todos}/>
                }
            </Fragment>
        );
    }
}

export default Home;