import { combineReducers } from 'redux';
import testReducer from './testReducer';
import giphyReducer from './giphyReducer';
import getColor from './getColor';
import savecolorReducer from './savecolorReducer';
export default combineReducers({
  test: testReducer,
  giphy: giphyReducer,
  getcolor: getColor,
  saveColor: savecolorReducer
});