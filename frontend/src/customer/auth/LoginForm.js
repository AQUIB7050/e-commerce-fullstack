import { Button, Grid2, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData={
            email:data.get("email"),
            password:data.get("password")
        }

        dispatch(login(userData));
        console.log("userdata", userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid2 container spacing={3}>
                    
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
                            Login
                    </Button>
                    

                </Grid2>

            </form>

            <div className="flex justify-center flex-col items-center">
                <div className="py-3 flex items-center">
                    <p>Don't have an account ?</p>
                    <Button onClick={()=>navigate("/register")} className="ml-5" size="small">Register</Button>
                </div>
            </div>
        </div>
    );

}

export default LoginForm;