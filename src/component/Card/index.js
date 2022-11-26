import "./index.scss";

function Card(props) {
  return (
    <div className="Card">
      <div className="img-wrapper">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="card-wrapper">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
