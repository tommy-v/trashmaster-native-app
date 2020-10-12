export const NAVIGATE = 'NAVIGATE';

export const navigate = path => {
    return {
        type: NAVIGATE,
        payload: path,
    }
}
