export function reduxAction(type, payload) {
    return { type, payload }
}

export const startLoading = {
    type: "START_LOADING",
    payload: true,
};

export const stopLoading = {
    type: "STOP_LOADING",
    payload: false,
};