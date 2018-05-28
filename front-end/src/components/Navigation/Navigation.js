import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {

	if (isSignedIn) {
		return (
			<div className="navigation mr5" style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => onRouteChange('signout')} className='f4 dim white pa3 pointer'>Sign Out</p>
			</div>
		);
	} else {
		return (
			<div className="navigation mr5"  style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p onClick={() => onRouteChange('signin')} className='f4 dim white pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('register')} className='f4 dim white pa3 pointer'>Register</p>
			</div>
		);
	}
}


export default Navigation;