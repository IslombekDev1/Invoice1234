import { Component } from 'react';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import FirstInvoice from '../components/invoice1/FirstInvoice';
import SecondInvoice from '../components/invoice2/SecondInvoice';
import ThirdInvoice from '../components/invoice3/ThirdInvoice';
import FourthInvoice from '../components/invoice4/FourthInvoice';

class HomePage extends Component {
    state = {
        firstInvoice: true,
        secondInvoice: false,
        thirdInvoice: false,
        fourthdInvoice: false
    }
    
    firstInvoiceFunct = () => {
        this.setState({
            firstInvoice: true,
            secondInvoice: false,
            thirdInvoice: false,
            fourthdInvoice: false
        })
    }

    secondInvoiceFunc = () => {
        this.setState({
            firstInvoice: false,
            secondInvoice: true,
            thirdInvoice: false,
            fourthdInvoice: false
        })
    }

    thirdInvoiceFunc = () => {
        this.setState({
            firstInvoice: false,
            secondInvoice: false,
            thirdInvoice: true,
            fourthdInvoice: false
        })
    }

    fourthInvoiceFunc = () => {
        this.setState({
            firstInvoice: false,
            secondInvoice: false,
            thirdInvoice:false,
            fourthdInvoice: true
        })
    }
    render() {
        const {firstInvoice, secondInvoice, thirdInvoice, fourthdInvoice} = this.state
        return (
             <Container maxWidth='1872px'>
                 <Box sx={{border:'5px solid'}} >

                    <Button onClick={this.firstInvoiceFunct} variant="outlined" sx={{width:'25%'}} >Invoice 1</Button>
                    <Button onClick={this.secondInvoiceFunc} variant="outlined" sx={{width:'25%'}} >Invoice 2</Button>
                    <Button onClick={this.thirdInvoiceFunc} variant="outlined" sx={{width:'25%'}} >Invoice 3</Button>
                    <Button onClick={this.fourthInvoiceFunc} variant="outlined" sx={{width:'25%'}} >Invoice 4</Button>

                    {   
                        firstInvoice ? <FirstInvoice/>:
                        secondInvoice ? <SecondInvoice/>:
                        thirdInvoice ? <ThirdInvoice/>:
                        fourthdInvoice? <FourthInvoice/>
                        :
                        ' 404 not found ): '
                    }
                 </Box>
             </Container>
        );
    }
}

export default HomePage;