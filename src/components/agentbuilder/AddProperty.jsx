import axios from 'axios'
import React, { useRef } from 'react'

export default function AddProperty() {
  let imgref = useRef("")
  // http://localhost:8080/property
  // const AddData=()=>
  //   {   const config = {headers: {'Content-Type': 'multipart/form-data'}}

     
  //       const place ={name:nameref.current.value,resume:imgref.current.files[0]}
  //       axios.post("http://localhost:8080/forposthandle",place,config,
  //       ).then((d)=>console.log(d))
  const saveProperty = ()=>
  {
    let data = {img:imgref.current.files[0]}
    console.log(data)
    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    axios.post("http://localhost:8080/property",data,config)
    .then((d)=>console.log(d))
    .catch((err)=>console.log(err))
  }
  return (
    <div>addproperty
      <p>SElect propery Image:
        <input type="file" ref={imgref} />
      </p>
      <input type="button" value="Save" onClick={()=>saveProperty()}/>
</div>

  )
}
