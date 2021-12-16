import React from 'react';


function MedicalTreatmentPanel(props){
  const [treatId, setTreatId] = React.usestate('');
  const [name, setName] = React.usestate('');
  const [category, setCategory] = React.usestate('');
  const [treatCourseId, setTreatCourseId] = React.usestate('');
  const [startDate, setStartDate] = React.usestate('');
  const [type, setType] = React.usestate('');



function display(){
  alert ("[" + "name = "+ name+ ", treatID = "+ treatId + ", startDate = "+startDate +", type = "+ type + ",category = " + category + ", treatCourseId = " + treatCourseId + "]");

}

function clearClickHandler(){
  setTreatId('');
  setName('');
  setCategory('');
  setTreatCourseId('');
  setStartDate('');
  setType('');

}


return(
  <form>
    <br/>

    <h2 className = "h"> Medical Records </h2>
    <br/>
    <input placeholder = "TreatID" value = {treatId} type = "text" onChange = {e=> setTreatId (e.target.value)} name = "treatId"></input>

    <br/>

    
    
    <input placeholder = "Name" value = {name} type = "text" onChange = {e=> setName (e.target.value)} name = "name"></input>

    <br/>
    <input placeholder = "StartDate" value = {startDate} type = "text" onChange = {e=> setStartDate (e.target.value)} name = "startDate"></input>

    <br/>

    <input placeholder = "TreatCourseID" value = {treatCourseId} type = "text" onChange = {e=> setTreatCourseId (e.target.value)} name = "treatCourseId"></input>

    <br/>

    <input placeholder = "Category" value = {category} type = "text" onChange = {e=> setCategory (e.target.value)} name = "Category"></input>

)
}