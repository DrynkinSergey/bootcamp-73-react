const Message = ({ title = 'DefaultUser', text, online }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <p>Status: {online ? 'active' : 'disabled'} </p>
    </div>
  );
};

export default Message;
