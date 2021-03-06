import React from 'react';
import Post from './Post';
import s from './news.module.scss';
import PopUp from './PopUp';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../redux/news_reducer';
import Loader from '../../helpers/loader';
import { functions } from '../../helpers/funks';
const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.News);
  const isFetching = useSelector((state) => state.news.isFetching);
  const req = useSelector((state) => state.news.req);
  const [Reqested, setReqested] = React.useState(false);
  const [popupInfo, setPopupInfo] = React.useState({});
  const [popActive, setPopActive] = React.useState(false);
  const checkOffset = function () {
    functions.debounceFunc();
    if (document.documentElement.scrollHeight - window.pageYOffset <= 10000) {
      if (!req) {
        dispatch(addNews());
      }
    }
  };
  if (popActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible ';
  }
  const onChangeDeb = functions.debounceFunc(checkOffset, 50);

  React.useEffect(() => {
    dispatch(addNews());
    window.addEventListener('scroll', onChangeDeb);
  }, []);
  React.useEffect(() => {}, [isFetching, news, req]);

  return (
    <div className={s.container}>
      <div className={s.posts__inner}>
        {news.length !== 0 ? (
          news.map((i) => {
            return (
              <Post
                setPopActive={setPopActive}
                setPopupInfo={setPopupInfo}
                key={i.url}
                i={i}
              />
            );
          })
        ) : (
          <div className={s.nothing}>
            <Loader />
          </div>
        )}
      </div>
      <div className={s.loader}>
        {isFetching && news.length !== 0 ? <Loader /> : null}
      </div>
      <div className={s.PopUp__inner}>
        {popActive ? (
          <PopUp
            popupInfo={popupInfo}
            popActive={popActive}
            setPopActive={setPopActive}
          />
        ) : null}
      </div>
    </div>
  );
};

export default News;
