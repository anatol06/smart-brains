import React from 'react';
const keys = require('../../config/keys');


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch(keys.serverHost + 'signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })   
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className="login br3 shadow-5 center">
                <div id="login">
                    <div id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="f2 fw6 ph0 mh0">Sign In</div>

                        <div className="mt3">
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address" 
                                id="email-address" 
                                placeholder="Your Email" 
                                onChange={ this.onEmailChange }
                                />
                        </div>

                        <div className="mv3">
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Your Password" 
                                onChange={ this.onPasswordChange }
                                />
                        </div>

                    </div>
                    <div>
                        <input
                            onClick={ this.onSubmitSignIn }
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            defaultValue="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3 pointer">
                        <p onClick={() => onRouteChange('register')} className="f6 mb0 link dim black db">Register</p>
                    </div>
                </div>
            </div>
        );
    }   
}

export default Signin;