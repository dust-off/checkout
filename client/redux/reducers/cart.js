import Redux from 'redux';

export function cartReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_NAME':
            console.log('UPDATE_NAME')
            state = Object.assign({}, state, {
                name: action.payload
            })
            break;
        case 'UPDATE_PW':
            console.log('UPDATE_PW')
            state = Object.assign({}, state, {
                pw: action.payload
            })
            break;
        case 'UPDATE_EMAIL':
            console.log('UPDATE_EMAIL')
            state = Object.assign({}, state, {
                email: action.payload
            })
            break;
        default:
            return state;
    }
    return state;
};
