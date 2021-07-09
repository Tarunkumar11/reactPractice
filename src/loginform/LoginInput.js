import React,  {useState} from 'react';
import './LoginInput.css'




function LoginInput(props) {
    const [value, setValue] = useState('');
    function donothing1(){
        document.getElementById('email_span').innerHTML="";
        setValue((""))
    }

    function emailcheck(e){
        var email= document.getElementById('email');  
        if(email == null){
            return false
        }
        console.log("this is email: "+ email.value)
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
            console.log("tarun saini")
            return true;   
        }
        else{
            
            setValue(("Invalid Email"))
            e.preventDefault()
            console.log("tarun")
            return false;
        }
    }


    console.log("This is a message " + value)
    return (
        <div className="form-group">
            <input type={props.type} className="form-control" id={props.id} onFocus= {donothing1} onBlur={ emailcheck } aria-describedby="emailHelp" placeholder={props.placeholder} />
            <span id={ props.SpId } className="error_span">{value}</span> 
        </div>
    )
}

export default LoginInput;