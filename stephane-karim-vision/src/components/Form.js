import React, { useState } from 'react';
import { StyledForm, LogInBtn } from './StyledForm';

const Form = () => {
	//add a use state that change with the change of the input
	//set the useState as object because the API will expect an object

	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const handleChange = (event) => {
		console.log(event);
		//Always use a spread operator ..formData to spread the content of the formdata.  then set [event.targe.id] to event.target.value
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event.target);
	};
	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
			<h3>Sign In</h3>
				<label htmlFor='text'></label>
				<input type='text' onChange={handleChange} />
				<label htmlFor='text'></label>
				<input type='password' onChange={handleChange} />
				<LogInBtn type='submit'>Click</LogInBtn>
			</StyledForm>
		</>
	);
};

export default Form;
