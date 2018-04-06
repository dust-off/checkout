import React from 'react';
import TextField from 'material-ui/TextField';

const Page0 = ({ cart, handleNameInputChange, handlePwChange, handleEmailChange }) => {
    //name, email, and password for account creation
    // const change = (e) => {
    //     console.log('e.target', e.target.id)
    //     handleNameInputChange(e)
    // }
    const { name, pw, email } = cart
    return (
    <div>
        <TextField
            id='name'
            label='Name'
            value={name}
                onChange={handleNameInputChange}
            type='text'
            className='inputfield'
            InputLabelProps={{
                shrink: true,
            }}
            margin='normal'
        />
        {' '}
        <TextField
            id='password'
            label='password'
            value={pw}
            onChange={handlePwChange}
            type='text'
            className='inputfield'
            InputLabelProps={{
                shrink: true,
            }}
            margin='normal'
        />
        {' '}
        <TextField
            id='email'
            label='email'
            value={email}
            onChange={handleEmailChange}
            type='text'
            className='inputfield'
            InputLabelProps={{
                shrink: true,
            }}
            margin='normal'
        />
    </div>
    )
}

export default Page0
