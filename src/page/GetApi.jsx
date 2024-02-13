import { useState } from "react";
import Button from "../component/Button";
import InputForms from "../component/InputForms";

const GetApi = () => {
    const [value,setValue]=useState()
    const [valueEmail,setValueEmail]=useState()
    //for used to input tag
    const handleChange=(e)=>{
            setValue(e.target.value)
    }
    const handleChangeEmail =(e)=>{
            setValueEmail(e.target.value)
    }
    //for used to button tag
    const handelClick=(e)=>{
        console.log(value,valueEmail)
    }

  return (
    <div className="d-flex">
        <div className="mx-2 my-1">
            <InputForms type="text" value={value} onChange={handleChange}/>
        </div>
        <div className="mx-2 my-1">
          <InputForms type="email" value={valueEmail} onChange={handleChangeEmail}/>
        </div>
        <div className="mx-1 my-1">
          <Button onclick={(e)=>handelClick(e)}
          btnName="Show Button" className={"bg-success"}/>
        </div>
        {/* value={"Button"} */}
        <div className="mx-1 my-1">
         <Button btnName="Cancel Button" className={"bg-info"}/>
        </div>
    </div>
  );
};

export default GetApi;

