import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { city ,type} from '../../data/city'
export default function AddProperty() {
  let imgref = useRef("")
  let propertynameref= useRef("")
   let     cityref= useRef("")
  let       locationref= useRef("")
  let       contactref= useRef("")
  let      priceref= useRef("")
  let      typeref= useRef("")
  
const [selectcity,setselectcity]=useState([])
const [selecttype,setselecttype]=useState([])
  useEffect(()=>
  {
      let x = city.map((c)=>
      {
        return <option value={c} key={c}>{c}</option>
      })
      setselectcity(x)
      x = type.map((t)=>
      {
        return <option value={t} key={t}>{t}</option>
      })
      setselecttype(x)
  },[])
  // http://localhost:8080/property
  // const AddData=()=>
  //   {   const config = {headers: {'Content-Type': 'multipart/form-data'}}    
  //       const place ={name:nameref.current.value,resume:imgref.current.files[0]}
  //       axios.post("http://localhost:8080/forposthandle",place,config,
  //       ).then((d)=>console.log(d))
  const saveProperty = ()=>
  {
    let data = {img:imgref.current.files[0],
      propertyname:propertynameref.current.value,
    city:cityref.current.value,
  location:locationref.current.value,
contact:contactref.current.value,
price:priceref.current.value,
type:typeref.current.value}
    
    console.log(data)

    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    axios.post("http://localhost:8080/property",data,config)
    .then((d)=>console.log(d))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <h1>addproperty</h1>
      
        <p>Property Name : <input type="text" ref={propertynameref} /></p>
        <p>City : 
          <select ref={cityref}>
            {selectcity}
          </select>
          </p>
        <p>location : <input type="text" ref={locationref} /></p>
        <p>contact : <input type="text" ref={contactref} /></p>
        <p>price : <input type="text" ref={priceref}/></p>
        <p>type : <select ref={typeref}>
          {selecttype}</select></p>

      <p>SElect propery Image:
        <input type="file" ref={imgref} />
      </p>
      <input type="button" value="Save" onClick={()=>saveProperty()}/>
</div>
  )
}
