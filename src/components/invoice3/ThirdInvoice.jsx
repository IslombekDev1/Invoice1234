import { Component } from "react";
import { Box, Typography } from "@mui/material";

class ThirdInvoice extends Component {
  render() {
    return (
        <Box sx={{
            display:'flex',
            padding:'10px',
            gap:'10px'
            }}>
            
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                gap: '7px 0',
                
                }} >
                <Box sx={{
                    height:'20%',
                    border:'3px solid grey',
                    padding:'10px',
                    }} >
                    <Typography>Delivery <br /> (customer details)</Typography>
                </Box>

                <Box sx={{
                    height:'20%',
                    border:'3px solid grey',
                    padding:'10px'}}>
                    <Typography>Invoice customer <br /> (customer details)</Typography>
                </Box>

                <Box sx={{
                    height:'20%',
                    border:'3px solid grey',
                    padding:'10px'}}>
                    <Typography>Invoice calculation</Typography>
                </Box>
            </Box>

            <Box sx={{
                flex:'auto',
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                }} >
                <Box sx={{
                    border:'3px solid grey',
                    padding:'5px 5px 25px'
                    }}>

                    <Typography variant="h2">Product 3</Typography>

                    <Box sx={{
                        margin:'auto',
                        border:'2px solid grey',
                        padding:'7px'
                        }}>
                        <Typography variant="h3">Product details</Typography>
                        <hr />
                        <hr />
                    </Box>
                </Box>

                <Box sx={{
                    border:'3px solid grey',
                    padding:'5px 5px 25px'
                    }}>

                    <Typography variant="h2">Product 3</Typography>

                    <Box sx={{
                        margin:'auto',
                        border:'2px solid grey',
                        padding:'7px'
                        }}>
                        <Typography variant="h3">Product details</Typography>
                        <hr />
                        <hr />
                    </Box>
                </Box>

                <Box sx={{
                    border:'3px solid grey',
                    padding:'5px 5px 25px'
                    }}>

                    <Typography variant="h2">Product 3</Typography>

                    <Box sx={{
                        margin:'auto',
                        border:'2px solid grey',
                        padding:'7px'
                        }}>
                        <Typography variant="h3">Product details</Typography>
                        <hr />
                        <hr />
                    </Box>
                </Box>

            </Box>

        </Box>
    );
  }
}

export default ThirdInvoice;