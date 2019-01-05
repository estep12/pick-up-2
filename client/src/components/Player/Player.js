
import React, { Component } from 'react';
import Header from '../Header/Header.js'
import './Player.css';
import API from '../../utils/API'

class Player extends Component {

    state = {
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: ""
    }

    submitUser = () => {
        // this.setState({
        //         firstName: "",
        //         lastName: "",
        //         userName:"",
        //         phoneNumber: ""
        //     })
        API.saveUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            phoneNumber: this.state.phoneNumber,
            user: this.props.userId
        })
        .then(res => this.setState({
            firstName: "",
            lastName: "",
            userName:"",
            phoneNumber: ""
        }))
    };

    handleInputChange = event => {
        // event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };



    render() {
        return (
            <div>
            <Header header="Create a Player" />
            <form method="POST" action="/player">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        className="form-control form-control-lg"
                        id="firstName"
                        aria-describedby="firstNameInput"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        className="form-control form-control-lg"
                        id="lastName"
                        aria-describedby="lastNameInput"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Username</label>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        className="form-control form-control-lg"
                        id="userName"
                        aria-describedby="userNameInput"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        aria-describedby="phoneNumberHelp"
                        placeholder=""
                    />

                    <small id="phoneNumberHelp" class="form-text text-muted">For getting the squad together!</small>
                </div>
                <button type="submit" onClick={this.submitUser} class="btn btn-primary">Add Player</button>
            </form>
            </div>
        )
    }
}

export default Player;
