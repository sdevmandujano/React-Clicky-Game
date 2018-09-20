import React from 'react';

const Cards = props => (
<div>
    
<div className="card" style={{width: "14rem"}} onClick={() => props.setClicked(props.id)}>
  <img className="card-img-top" src={props.image} alt={props.name} />
  <div className="card-body">
    <p className="card-text">{props.name}</p>
  </div>
</div>

</div>
);

export default Cards;