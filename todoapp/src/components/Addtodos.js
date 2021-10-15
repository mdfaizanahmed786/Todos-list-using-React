import React ,{ useState, useEffect} from 'react';
import '../App.css';
import {v4 as uuidv4} from 'uuid';
import AddCircleIcon from '@material-ui/icons/AddCircle';


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
     
     
     //UseState for updating notes onclicking update button
     const [newTitle, updtnewTitle]=useState('');
     const [newNote, updtnewNote]=useState('');
     
     
       //Adding data to an empty array i.e tododata(below)
     const [data, setData]=useState([]);
    
    const[noteid , editnoteid]=useState('');
const makeChanges=()=>{
	//Adding an object to updateNote useEffect
	const tododata={
		id:uuidv4(),
		title:title,
		note:note
		}
		//Adding spread operator to add previous state data using spread operator, so that we can append previous data in map method
		if(!title || !note) {
			alert("You cannot leave this empty");
			}
			else{
	setData([...data, tododata]);
	updateTitle('');
	updateNote('');
	}
	
	
}

const deleteNotes=(index)=>{
	//Deleting the current selected note and returning other remaining notes
	const updatedTodo=data.filter((currElem)=>{
		
return currElem.id !== index;
		
		});
	setData(updatedTodo);
	
	
	}
	
	
	const editNote=(id)=>{

const data_note=prompt("Enter this value");
const updateNotie=data.map((currElem)=>{
	
	if(currElem.id===id){
		
		currElem.title=data_note
		}
	return currElem;
	
	});

setData(updateNotie);
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
 <>
 <div className="card w-75" style={{marginLeft:'49px', marginBottom:'10px'}} key={currElem.id}>
  <div className="card-body">
    <h5 className="card-title">{currElem.title}</h5>
    <p className="card-text">{currElem.note}</p>
    
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>editNote(currElem.id)}>Edit <i className="fa fa-edit"  aria-hidden="true">< /i></button>
    
    <button className="btn btn-danger" onClick={()=>deleteNotes(currElem.id)} style={{margin:'10px'}}>Delete <i className="fa fa-trash" aria-hidden="true"></i></button>
    
  </div>
</div>
</>
)
})
}


{/*
	data.map((currElem)=>{
		p

  
)
})
*/}
 
   

  
  
</React.Fragment>
	)
	}
	