import React from 'react';
import s from './news.module.scss';

const Post = (props) => {
  const handleClick = () => {
    props.setPopupInfo(inst);
    props.setPopActive(true);
  };
  const inst = props.i;
  return (
    <div className={s.post}>
      <div
        onClick={() => handleClick()}
        className={s.post__img}
        style={{
          backgroundImage: `url(${inst.urlToImage || null})`,
        }}
      ></div>
      <div className={s.post__bottom}>
        <div className={s.post__title}>{inst.source.name}</div>
        <div className={s.post__desc}>{inst.title}</div>
        <a href={inst.url}>More info in the source</a>
      </div>
    </div>
  );
};

export default Post;
