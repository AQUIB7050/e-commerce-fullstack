import { Button, Grid2, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import { useEffect } from "react";

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt));
        }
        
    }, [jwt, auth.jwt])


    const handleSubmit = (event) =>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }

        dispatch(register(userData));
        console.log("userdata", userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={3}>
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        fullWidth
                        autoComplete="given-name"
                        />
                    </Grid2>
                    <Grid2 item xs={12} sm={6}>
                        <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        autoComplete="given-name"
                        />
                    </Grid2>
                    
                    <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    />
                
                
                    <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="password"
                    />
                    
                    <Button
                        className="w-full"
                        type="submit"
                        variant="contained"
                        size="large"
                        sx = {{padding:".8rem 0",bgcolor:"#9155FD"}}>
                            Register
                    </Button>
                    

                </Grid2>

            </form>

            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                    <p>if you have already an account ?</p>
                    <Button onClick={()=>navigate("/login")} className="ml-5" size="small">login</Button>
                </div>
            </div>
        </div>
    );

}

export default RegisterForm;