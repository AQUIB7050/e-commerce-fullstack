import { Grid2 } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();


    return(
        <div onClick={()=> navigate("/account/order/{5}")} className="p-5 shadow-md shadow-black hover:shadow-2xl border">
            <Grid2 container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid2 item sx={6} size={6}>

                    <div className="flex xursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="" alt=""/>
                        <div className="ml-5 space-y-2">
                            <p>Title Goes Here</p>
                            <p className="opacity-50 text-xs font-semibold">Size: M</p>
                            <p className="opacity-50 text-xs font-semibold">Color:Black</p>
                        </div>
                    </div>

                </Grid2>

                <Grid2 item xs={2} size={2}>
                    <p>7643</p>
                </Grid2>

                <Grid2 item xs={4} size={4}>
                    {true && <div><p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
                        <span>Delivered on March 03</span>
                    </p>
                    <p className="text-xs"> 
                        Your Item has Been Delivered
                    </p>
                    </div>}
                    {false && <p>
                        <span>Expected Delivery On march 03</span>
                    </p>}
                </Grid2>

            </Grid2>

        </div>
    );

}

export default OrderCard;