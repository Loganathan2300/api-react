

const Button =({type,onclick,value,id , btnName,className})=>{
// const color ={
   
// }
    return(
        <div>
            <button onClick={onclick} value={value} id={id} className={`${className} rounded-2 border-2`}>{btnName}</button>
        </div>
    )
}

export default Button