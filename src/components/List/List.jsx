import clsx from 'clsx';
import s from './List.module.css';

export const List = ({ data, title }) => {
  const isActive = true;
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      {/* <ul className={`${s.list} ${s.padding} ${isActive && s.active}`}> */}
      <ul className={clsx(s.list, s.padding, isActive && s.active)}>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
