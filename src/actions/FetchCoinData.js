import axios from 'axios'
import { API_BASE_URL } from '../Utils/Constants'

export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCH_COIN_DATA })

        return axios.get(`${API_BASE_URL}/v1/ticker.?limit=10`)
            .then(res => {
                dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_COIN_DATA_FAIL, payload: err.data })
            })
    }
}