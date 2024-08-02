import { Menu } from 'lucide-react';
import s from './Profile.module.css';
import { FaRegUser } from 'react-icons/fa';

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.img} src={user.image} />
        <h2 className={s.fullname}>
          <FaRegUser className={s.icon} /> {user.firstName} {user.lastName}
        </h2>
        <p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#ec1313'
            stroke-width='2.25'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='lucide lucide-menu'
          >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
          </svg>
          <Menu color='#ec1313' strokeWidth={2.25} />
          Email: {user.email}
        </p>
        <p>Age: {user.age}</p>
        <p>Phone: {user.phone}</p>
        <p>Gender: {user.gender}</p>
        <section className={s.boxes}>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};
export default Profile;
