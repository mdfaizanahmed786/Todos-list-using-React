import React from 'react';


 export default function Card(props) {
	return (
	<>
	<div className="card w-75" style={{marginLeft:'49px'}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.note}</p>
    <button className="btn btn-primary">Remove</button>
  </div>
</div>


	</>
	
	)
	
	
	}