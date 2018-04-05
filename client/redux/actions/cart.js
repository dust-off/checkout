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
