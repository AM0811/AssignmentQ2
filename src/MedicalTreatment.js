import React from 'react';
// jamies sample
//Question2


export default function MedicalTreatment(props){
  return(
    <div>
      {props.treatId} {props.treatCourseId} {props.type} {props.category} {props.name} {props.startDate}
      </div>
  )
}