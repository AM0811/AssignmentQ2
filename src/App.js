import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';





export default function App() {
  const medicalTreatmentListAsJson =
   '[{"treatId":1, "treatCourseId":"AS01", "type":"Radiation", "category":"Sarcoma", "name":"Brachyerapy", "startDate":"16/01/2021"},'+

  '{"treatId":2, "treatCourseId":"AS02", "type":"Surgery", "category":"Carcinoma", "name":"Cryosurgery", "startDate":"18/03/2021"},'+

'{"treatId":3, "treatCourseId":"AS03", "type":"Surgery", "category":"Carcinoma", "name":"Lasers", "startDate":"20/03/2021"},'+

'{"treatId":4, "treatCourseId":"AS04", "type":"Surgery", "category":"Carcinoma", "name":"Photodynamic therapy", "startDate":"03/04/2021"},'+

'{"treatId":5, "treatCourseId":"AS05", "type":"Chemotherapy", "category":"Carcinoma", "name":"Intravenous", "startDate":"05/05/2021"}]';
return (
    <div>
      <MedicalTreatmentList json={medicalTreatmentListAsJson} />
    </div>
  );
}
