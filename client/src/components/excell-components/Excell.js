import React from 'react'
import ReactExport from "react-export-excel"

const ExcelFile = ReactExport.ExcelFile
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn


const Excell = (props) => {
  
const dataSet = props.volunteers


  return (
      <ExcelFile 
      filename="Voluntarios"
      element={<button className="btn btn-success">Exportar a Excell</button>}
      >
          <ExcelSheet data={dataSet} name="Voluntarios">
              <ExcelColumn label="Cargo" value="cargo"/>
              <ExcelColumn label="Delegación" value="delegacion"/>
              <ExcelColumn label="Diócesis" value="diocesis"/>
              <ExcelColumn label="Grupo" value="grupo"/>
              <ExcelColumn label="Nombre" value="nombre"/>
              <ExcelColumn label="DNI" value="dni"/>
              <ExcelColumn label="Fecha nacimiento" value="fecha_nacimiento"/>
              <ExcelColumn label="Dirección" value="direccion"/>
              <ExcelColumn label="CP" value="cp"/>
              <ExcelColumn label="Teléfono" value="telefono"/>
              <ExcelColumn label="Email" value="email"/>
              <ExcelColumn label="Revista" value={(col) => col.revista ? "Si" : "No"}/>
          </ExcelSheet>
      </ExcelFile>
  )
    
}

export default Excell