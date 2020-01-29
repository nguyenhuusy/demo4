import { GET_TRENDING_GIFS, GET_MORE_TRENDING_GIFS, GIPHY_LOADING } from '../type';
import { request } from '../../utils/request';
const api_key = 's6iv3qb8HGC9kRtpZrnprMquECmn4dd0';

export const getTrendingGifs = () => dispatch => {
  dispatch(giphyLoading());
  console.log(giphyLoading())
  const params = {
    api_key,
    limit: 20
  }

  request('get', 'https://api.giphy.com/v1/gifs/trending', { params })
    .then(res => {
      dispatch({
        type: GET_TRENDING_GIFS,
        payload: res
      })
    })
}

export const getMoreTrendingGifs = offset => dispatch => {
  dispatch(giphyLoading());
  const params = {
    api_key,
    offset,
    limit: 20
  }

  request('get', 'https://api.giphy.com/v1/gifs/trending', { params })
    .then(res => {
      dispatch({
        type: GET_MORE_TRENDING_GIFS,
        payload: { ...res, offset }
      })
    })
}

export const giphyLoading = () => {
  return ({
    type: GIPHY_LOADING
  })
}