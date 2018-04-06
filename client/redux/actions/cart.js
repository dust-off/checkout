export function updateName(string) {
    return {
        type: 'UPDATE_NAME',
        payload: string
    }
};

export function updatePW(string) {
    return {
        type: 'UPDATE_PW',
        payload: string
    }
};

export function updateEmal(string) {
    return {
        type: 'UPDATE_EMAIL',
        payload: string
    }
};

export function updateAddress(obj) {
    console.log('the ACTION:', obj)
    return {
        type: 'UPDATE_ADDRESS',
        payload: obj,
    }
}

export function updatePhone(number) {
    return {
        type: 'UPDATE_PHONE',
        payload: number,
    }
}

// address: {
//     line1: '',
//         line2: '',
//             city: '',
//                 state: '',
//                     zip: '',
//         },
// phoneNumber: '',