import { newsApi } from '../api/api';

const SET_NEWS = 'NEWS/SET_NEWS';
const SET_IS_FETCHING = 'NEWS/IS_FETCHING';
const SET_IS_REQ = 'NEWS/SET_IS_REQ';

let initialState = {
  News: [],
  isFetching: false,
  req: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return { ...state, News: [...state.News, ...action.News] };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_IS_REQ: {
      return { ...state, req: action.req };
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
export const setIsReq = (req) => {
  return {
    type: SET_IS_REQ,
    req,
  };
};
export const addNews = () => async (dispath) => {
  dispath(setIsFetching(true));
  dispath(setIsReq(true));
  let response = await newsApi.getNews();
  dispath(setIsReq(false));
  dispath(setNews(response));
  dispath(setIsFetching(false));
};

export default newsReducer;
