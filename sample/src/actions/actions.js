export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch('https://api.restful-api.dev/objects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};