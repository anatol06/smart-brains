import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className="f3"> 
				{'This Magic Brain will detect faces in your pictures. Give a try.'}
			</p>
			
			<div className="center">
				<form id="image-link" className="center pa4 br3">
					<input type="text" className="f4 pa2 w-70 center" placeholder="URL to a person photo" onChange={ onInputChange } />
					<button className="button w-30 grow f4 link ph3 pv2 dib pointer" 
							onClick={ onButtonSubmit } 
					>Detect</button>
				</form>
			</div>
		</div>
	);
}


export default ImageLinkForm;