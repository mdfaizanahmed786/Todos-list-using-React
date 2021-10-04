import React from 'react';


 export default function Card(props) {
	return (
	<>
	<div className="card w-75" style={{marginLeft:'49px', marginBottom:'10px'}}>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.note}</p>
    
    <button className="btn btn-primary" style={{margin:'10px'}}>Edit <i className="fa fa-edit" aria-hidden="true"></i></button>
    <button className="btn btn-danger" style={{margin:'10px'}}>Delete <i className="fa fa-trash" aria-hidden="true"></i></button>
    
  </div>
</div>


	</>
	
	)
	
	
	}