import React ,{ useState, useEffect} from 'react';
import '../App.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Card from './Card.js';

//Styling buttton
const btnstyle={
	fill:'#0d6efd',
	fontSize:'4.1rem',
	position:'fixed',
	top:'85%',
	left:'78%',
	zIndex:'1'
	
	}
	

 export default function Addtodos() {
 	
 	const [title, updateTitle]=useState('');
     const [note, updateNote]=useState("");
     
     //Adding data to an empty array i.e tododata(below)
     const [data, setData]=useState([]);
    
const makeChanges=()=>{
	//Adding an object to updateNote useEffect
	const tododata={
		id:new Date().getTime().toString(),
		title:title,
		note:note
		
		}
		//Adding spread operator to add previous state data, so that we can append previous data in map method
		if(!title || !note) {
			alert("Please enter the details");
			}
			else{
	setData([...data, tododata]);
	}
}

	
	return (
	<React.Fragment>
	<h1 id="main">Note Keeper</h1>
	<div className="form-group">
   
   <div className="form-group">
    
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add title" style={{fontWeight:'bold' }} value={title} onChange={(e)=>updateTitle(e.target.value)}/>
  </div>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Add note" value={note} onChange={(e)=> updateNote(e.target.value)}></textarea>
  </div>
  <AddCircleIcon style={btnstyle} onClick={makeChanges}/>
  
 
  
 {
 	//Mapping data in an empty array using currElem which is itself an object that contains key value pairs of id, title and note
 data.map((currElem)=>{
 	return (
 	<div key={currElem.id} >
 
<Card title={currElem.title} note={currElem.note} />
</div>
)


})
 
 
 
 }

 
 
 
  
	</React.Fragment>
	
	)
	
	
	}