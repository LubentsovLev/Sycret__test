import { newsApi } from '../api/api';

const SET_NEWS = 'NEWS/SET_NEWS';
const SET_IS_FETCHING = 'NEWS/IS_FETCHING';

let initialState = {
  News: [],
  isFetching: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return { ...state, News: [...state.News, ...action.News] };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export const setNews = (News) => {
  return {
    type: SET_NEWS,
    News,
  };
};
export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching,
  };
};
export const addNews = () => async (dispath) => {
  dispath(setIsFetching(true));
  let response = await newsApi.getNews();
  dispath(setNews(response));
  dispath(setIsFetching(false));
};

export default newsReducer;
