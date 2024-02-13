import React from "react";

const InputForms = ({type,onChange,value,name,id,className,placeholder}) => {
  return (
    <div >
        <div>
          <input type={type} onChange={onChange} value={value} name={name} id={id} className={className}placeholder={placeholder}/>
        </div>
    </div>
  );
};

export default InputForms;
