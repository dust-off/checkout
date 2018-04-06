import React from 'react';
import TextField from 'material-ui/TextField';

const Page1 = ({ cart, handleAddressInputChange, handlePhoneInputChange }) => {
    // ship to address(line 1, line 2, city, state, zip code) and phone number.
        // name: '',
        // pw: '',
        // email: '',
        // address: {
        //     line1: '',
        //     line2: '',
        //     city: '',
        //     state: '',
        //     zip: '',
        // },
        // phoneNumber: '',
    const { address: {line1, line2, city, state, zip}, phoneNumber } = cart
    const change = (e) => {
        const obj = {
            [e.target.id]: e.target.value
        }
        handleAddressInputChange(obj)
    }
    return (
    <div>
        <TextField
            id='city'
            label='City'
            value={city}
            onChange={change}
            type='text'
            className='inputfield'
            InputLabelProps={{
                shrink: true,
            }}
            margin='normal'
        />
        {' '}
        <TextField
            id='state'
            label='State'
            value={state}
            onChange={change}
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

export default Page1
