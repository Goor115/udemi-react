function Person(props) {
  const { firstNeme, lastName, email, img } = props;
  return (
    <div className="card">
      <img src={img} />
      <h3>
        {firstNeme} {lastName}
      </h3>
      <h4> {email} </h4>
    </div>
  );
}

export default Person;
