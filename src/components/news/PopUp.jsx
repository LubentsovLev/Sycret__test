import React from 'react';
import s from './news.module.scss';
const PopUp = (props) => {
  const inst = props.popupInfo;
  return (
    <div className={props.popActive ? s.PopUp : s.PopUp__none}>
      <div className={s.PopUp__container}>
        <div
          onClick={() => {
            props.setPopActive(false);
          }}
          className={s.x}
        >
          <img
            src="https://натяжные-потолки.на-все-руки.москва/template_files/close-popup.png"
            alt=""
          />
        </div>
        <div
          // style={{
          //   backgroundImage: `url(${inst.urlToImage || null})`,
          // }}
          className={s.PopUp__img}
        >
          <img src={inst.urlToImage} alt="" />
        </div>
        <div className={s.PopUp__body}>
          <div className={s.PopUp__body_cont}>
            <div className={s.post__title}>{inst.source.name}</div>
            <div className={s.PopUp__title}>{inst.title}</div>
            <div className={s.PopUp__text}>{inst.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
