import { Box, Button, Grid2, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phone")

        }

    }

    return (
        <div>
            <Grid2 container spacing={4}>
                <Grid2 xs={12} size={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">

                    <div className="p-5 py-7 border-b cursor-pointer">
                        <AddressCard/>
                        <Button sx={{mt:2, bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>Deliver Here</Button>
                    </div>

                </Grid2>

                <Grid2 item xs={12} size={7}>

                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid2 container spacing={3}>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete="given-name"
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={12}>
                                    <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    autoComplete="given-name"
                                    multiline
                                    rows={4}
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="given-name"
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Region"
                                    fullWidth
                                    autoComplete="given-name"
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    autoComplete="shipping postal-code"
                                    fullWidth
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                    <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    fullWidth
                                    autoComplete="given-name"
                                    />
                                </Grid2>
                                <Grid2 item xs={12} size={6}>
                                <Button sx={{py:1.5,mt:2, bgcolor:"RGB(145 85 253)"}} size='large' variant='contained' type="submit">Deliver Here</Button>
                                </Grid2>

                            </Grid2>
                        </form>
                    </Box>

                </Grid2>
            </Grid2>
        </div>
    );
}

export default DeliveryAddressForm;