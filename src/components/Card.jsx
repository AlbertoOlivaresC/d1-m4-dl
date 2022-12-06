import Button from "./Button";

const Card = ({direccion="",titulo="blanco",descripcion="En blanco"}) => {
  return (
    <div className="card" style={{width: '18rem', margin: '0 0 1rem 0'}}>
        <img className="card-img-top" src={direccion} alt="" style={{height: '14rem'}}/>
        <div className="card-body">
            <h3>{titulo}</h3>
            <p className="card-text">{descripcion}</p>
        </div>
        <Button></Button>
    </div>
  );
};

export default Card;
