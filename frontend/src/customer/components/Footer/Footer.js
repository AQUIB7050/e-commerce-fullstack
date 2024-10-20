import {Typography, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';



const Footer = () => {
    return <div>
        <Grid className="bg-black text-white text-center mt-10" container sx={{bgcolor:"black", color:"white", py:3}}>

            <Grid size={3} xs={12} sm={6} md={3}>

                <Typography className="pb-5" variant="h6">Company</Typography>
                <div>
                <Button className="pb-5" variant="h6">About</Button>
                </div>
                <div>
                <Button className="pb-5" variant="h6">Blog</Button>    
                </div>
                <div>
                <Button className="pb-5" variant="h6">Press</Button>
                </div> 
                <div>
                <Button className="pb-5" variant="h6">Jobs</Button>    
                </div>
                <div>
                <Button className="pb-5" variant="h6">Partners</Button>
                </div>      
            </Grid>
            <Grid size={3} xs={12} sm={6} md={3}>

                <Typography className="pb-5" variant="h6">Solutions</Typography>
                <div>
                <Button className="pb-5" variant="h6">Marketing</Button>
                </div>
                <div>
                <Button className="pb-5" variant="h6">Analytics</Button>    
                </div>
                <div>
                <Button className="pb-5" variant="h6">Commerce</Button>
                </div> 
                <div>
                <Button className="pb-5" variant="h6">Insights</Button>    
                </div>
                <div>
                <Button className="pb-5" variant="h6">Support</Button>
                </div>      
            </Grid>
            <Grid size={3} xs={12} sm={6} md={3}>

                <Typography className="pb-5" variant="h6">Documentation</Typography>
                <div>
                <Button className="pb-5" variant="h6">Guides</Button>
                </div>
                <div>
                <Button className="pb-5" variant="h6">API Status</Button>    
                </div>   
            </Grid>
            <Grid size={3} xs={12} sm={6} md={3}>

                <Typography className="pb-5" variant="h6">Legal</Typography>
                <div>
                <Button className="pb-5" variant="h6">Claim</Button>
                </div>
                <div>
                <Button className="pb-5" variant="h6">Privacy</Button>    
                </div>
                <div>
                <Button className="pb-5" variant="h6">Terms</Button>
                </div>   
            </Grid>
        </Grid>
        <Grid className='bg-black text-white pt-5' xs={12}>
                <Typography variant="body" component="p" align="center">
                    &copy; 2024 by AQUIB. All rights reserved.
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Made with love.
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Write me @ <a>ansariaquib301@gmail.com</a>
                </Typography>
        </Grid>
    </div>
}

export default Footer;