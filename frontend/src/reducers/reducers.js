export function fetchItemsError(state = null, action) {
    switch (action.type) {
        case 'FETCH_ITEMS_ERROR':
            return action.error;

        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'PENDING_RESPONSE':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'FETCH_ITEMS_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
