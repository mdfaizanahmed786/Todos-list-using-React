import React ,{ useState, useEffect} from 'react';
import '../App.css';
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
       //Adding data to an empty array i.e tododata(below)
     const [data, setData]=useState([]);
    
const makeChanges=()=>{
	//Adding an object to updateNote useEffect
	const tododata={
		id:new Date().getTime().toString(),
		title:title,
		note:note
		}
		//Adding spread operator to add previous state data using spread operator, so that we can append previous data in map method
		if(!title || !note) {
			alert("Please enter the details");
			}
			else{
	setData([...data, tododata]);
	updateTitle('');
	updateNote('');
	}
}

const deleteNotes=(index)=>{
	
	const updatedTodo=data.filter((currElem)=>{
		
		
			
			return currElem.id !== index;
			
		});
	setData(updatedTodo);
	
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
  
  {/*Boostrap Modal code:*/}




  
  
 {
 	//Mapping data in an empty array using currElem which is itself an object that contains key value pairs of id, title and note
 
 data.map((currElem)=>{
 	return (
 <>
 <div className="card w-75" style={{marginLeft:'49px', marginBottom:'10px'}} key={currElem.id}>
  <div className="card-body">
    <h5 className="card-title">{currElem.title}</h5>
    <p className="card-text">{currElem.note}</p>
    
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit <i className="fa fa-edit"  aria-hidden="true">< /i></button>
    
    <button className="btn btn-danger" onClick={()=>deleteNotes(currElem.id)} style={{margin:'10px'}}>Delete <i className="fa fa-trash" aria-hidden="true"></i></button>
    
  </div>
</div>




</>
)
})
 }
 
   
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit your note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
          
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Title</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Note</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>


  
  
  
</React.Fragment>
	)
	}
	