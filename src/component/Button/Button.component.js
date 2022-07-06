const Button =(props)=>{
    const setthevalue=()=>{
        props.setvalue(props.string);
        props.setstring("");
      }
    return(
        <div>
         <button onClick={setthevalue}>Press it</button>

        </div>
    )
}
export default Button;