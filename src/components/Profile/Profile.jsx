import s from './Profile.module.css';
const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.img} src={user.image} />
        <h2 className={s.fullname}>
          {user.firstName} {user.lastName}
        </h2>
        <p>Email: {user.email}</p>
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
