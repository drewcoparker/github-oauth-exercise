const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

const authFail = () => ({
    type: 'AUTH_FAIL'
})

export function pendingResponse(bool) {
    return {
        type: 'PENDING_RESPONSE',
        isLoading: bool
    }
}

export function fetchItemsSuccess(items) {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        items
    }
}

export function fetchItemsError(error) {
    return {
        type: 'FETCH_ITEMS_ERROR',
        error
    }
}

export function fetchJson(url) {
    return (dispatch) => {
        dispatch(pendingResponse(true))
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(pendingResponse(false))
                return response
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchItemsSuccess(items)))
            .catch((error) => dispatch(fetchItemsError(error)))
    }
}
