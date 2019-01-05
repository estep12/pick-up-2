import React, { Component } from 'react';
import Header from '../Header/Header.js'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from '../Home/Home.js' 
import './Game.css';
import API from '../../utils/API'

class Game extends Component {

state = {
    players: []
};

componentDidMount() {
    this.getUsers()
};

getUsers = () => {
    API.getUsers()
    .then(res  => 
        this.setState({
            players: res.data
        })
        
    )
    .catch(err => console.log(err));
};

    render() {
        return (
        <div>
            <Header header="Start a New Game" />
        <div>
            <h2>Team 1</h2>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 1
                    </button>
                        <div class="dropdown-menu">
                            {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 2
                    </button>
                        <div class="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 3
                    </button>
                        <div class="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 4
                    </button>
                        <div class="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 5
                    </button>
                        <div class="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
        </div>

        <div>
        <h2>Team 2</h2>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 1
                </button>
                    <div class="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 2
                </button>
                    <div class="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 3
                </button>
                    <div class="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 4
                </button>
                    <div class="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 5
                </button>
                    <div class="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
    </div>
        <button type="submit" id="start-game" onClick={this.getUsers} class="btn btn-primary">Start Game</button>
    </div>
        )
    }
}

export default Game;