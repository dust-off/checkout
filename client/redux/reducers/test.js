import Redux from 'redux';

var test = (state = [], action) => {
    switch (action.type) {
        case 'RUN_TEST':
            console.log('RUN_TEST')
            return action.payload;
        default:
            return state;
    }
};

export default test;
