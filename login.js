import React, {useState , useEffect } from "react";
import {Link,useHistory} from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import Navigation from "./navigation";
//import { InsertChart } from "@material-ui/icons";


const Login = () => {
	   const history = useHistory();
	   const [user, setUser] = useState({
		 email: "", password: ""
	});
	const [formError , setFormError] = useState({});
	const [isSubmit , setIsSubmit] = useState(false);
	let name,value;
	const handleInputs = (e) =>
	{
	 name = e.target.name;
	 value = e.target.value;

	 setUser({...user, [name]:value})
	} 
	   
	   const loginUser = async (e) => {
		   const {email , password} = user;
		   e.preventDefault();
		 const res = await fetch('/login',{
			 method:"POST",
			 headers:{
              "Content-Type": "application/json"
			 },
			 credentials:'include',
			 body:JSON.stringify({
				 email,password
			 })
		});
		console.log('/////////////////////');
		setFormError(validate(user));
		setIsSubmit(true);
		res.json();
		console.log(' catching error');
		console.log(res.status);
		if(res.status===422||!res)
		{
			window.alert("Invalid Credentials");
		}
		else{
			window.alert("login SuccessFully");
			history.push('/home');
		}
	   }    
	   useEffect(() => {
		console.log(formError);
		if(Object.keys(formError).length === 0 && isSubmit){
			console.log(user);
		}
	},[formError]);
	  const validate = (values) => {
		  const errors = {};
		  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		  if(!values.name)
		  {
			  errors.name = "Name is required";
		  }
		  if(!values.email)
		  {
			  errors.email = "Email is required";
		  }else if(!regex.test(values.email)) {
			  errors.email ="Not a valid Email";
		  }
		  if(!values.password)
		  {
			  errors.password = "Password is required";
		  } 
		  return errors;
	  } 
	
     return ( 
        <div className="header">
        <Navigation/>
        <div className="bg_image">
	<div className="d-flex justify-content-center h-100">
		
		<div className="card">
			<div className="card-header">
				<h3>Login</h3>
				
			</div>
			<div className="card-body">
				<form method="POST">
						<div className="feilds">
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><PersonIcon /></span>
						</div>
						<input type="email" name="email" id="email" className="form-control" placeholder="Email" 
						//ref={register({required: "Email is required"})}
						value={user.email}
						onChange = {handleInputs} ></input>
						</div>
					</div>
					<div className="error">{formError.email}</div>
					<div className="feilds">
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><VpnKeyIcon /></span>
						</div>
						<input type="password" name="password" id="password" className="form-control" placeholder="Password"
					//	ref={register({required:"Password is required"})}
						value={user.password}
						onChange = {handleInputs} ></input>
					</div>
					</div>
					<div className="error">{formError.password}</div>
					<div className="feilds">
					<div className="form-group">
						<input type="submit" value="Login"
						onClick={loginUser}
						className="btn float-right login_btn"></input>
					</div>
					</div>
				</form>
                </div>
				<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<Link to="/SignUp">Sign Up</Link>
				</div>
				</div>
                </div>
                </div>
				</div>
				</div>
			
					
				
                
     );
}


export default Login;