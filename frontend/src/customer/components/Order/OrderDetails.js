import { Box, Grid2 } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return (
        <div className="px-5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard/>
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>
            <Grid2 container className="space-y-5">
                {[1,1,1,1,1].map((item) =>
                <Grid2 size={12} item container className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}}>
                    <Grid2 item xs={6}>
                        <div className="flex items-center space-x-4">
                            <img className="w-[5rem] h-[5rem] object-cover object-top" src="" alt=""/>

                            <div className="space-y-2 ml-2">
                                <p className="font-semibold ">Title goes here</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold">
                                    <span>Color: pink</span>
                                    <span>Size: M</span>
                                </p>
                                <p>Seller: </p>
                                <p>8338</p>
                            </div>
                        </div>

                    </Grid2>

                    <Grid2 item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-2xl"/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid2>

                </Grid2>
                )}

            </Grid2>
        </div>
    );
}

export default OrderDetails;