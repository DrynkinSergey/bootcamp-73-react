const Message = ({ title = 'DefaultUser', text }) => {
  console.log(title);
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Message;
