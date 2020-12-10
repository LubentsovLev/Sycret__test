import React from 'react';
import s from './news.module.scss';

const Post = (props) => {
  const inst = props.i;
  const handleClick = () => {
    props.setPopupInfo(inst);
    props.setPopActive(true);
  };

  return (
    <div className={s.post}>
      <div
        onClick={() => handleClick()}
        className={s.post__img}
        style={{
          backgroundImage: `url(${inst.url || null})`,
        }}
      ></div>
      <div className={s.post__bottom}>
        <div className={s.post__title}>{inst.date}</div>
        <div className={s.post__desc}>{inst.title}</div>
        <a href={inst.url}>Full image</a>
      </div>
    </div>
  );
};

export default Post;
