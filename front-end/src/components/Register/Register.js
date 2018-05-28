import React from 'react';
const keys = require('../../config/keys');

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            name: '',
            email: '',
            password: ''           
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch(keys.serverHost + 'register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:       this.state.name,
                email:      this.state.email,
                password:   this.state.password
                
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
        }

    render() {
        return (
            <div className="login br3 shadow-5 center">
                    <div id="login">
                        <div id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className="f2 fw6 ph0 mh0">Register</div>
                            <div className="mt3">
                                <input  
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"            type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Username" 
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <input  
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"            type="email" 
                                    name="email-address"    
                                    id="email-address" 
                                    placeholder="Email"
                                    onChange={this.onEmailChange} 
                                />
                            </div>
                            <div className="mv3">
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input 
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer"
                                type="submit"
                                defaultValue="Register"
                            />
                        </div>                    
                    </div>
            </div>
        );
    }
}

export default Register;