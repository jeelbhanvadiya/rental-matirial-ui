import {useEffect} from 'react'
import {Grid} from "@material-ui/core";
import {ScrollUp} from '../../utils/helper';
import {Helmet} from "react-helmet";

const ScamsAlert = () => {
    useEffect(() => {
        ScrollUp();
    }, [])
    return (
        <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
            style={{textAlign: 'justify'}}
        >
            <Helmet>
                <title>
                    Rent Finder - rental scam in Germany
                </title>
                <meta name="description" content="rental platform with many Houses, Flats and Apartments for rent.
                rent finder provide a centralized platform for finding or renting apartments, homes and condos in your city." />
                <meta name="keywords" content="Rent finder rental scam in Germany"/>
            </Helmet>
            <Grid item xs={9}>
                <h1>Scams Alert</h1>
                <br/>
                <p>
                    1. Don’t wire money as a deposit or payment for the first and last month's rent. Wiring money is the
                    same as giving cash; you can't get a refund, even if you find out the offer was a fraud.
                </p>
                <p>
                    2. Don’t give in to high-pressure sales tactics.
                </p>
                <p>3. Don’t pay a security deposit, fee, or first month’s rent before you’ve signed a lease. </p>
                <p>4. Don’t rent a property that you are unable to see before signing the agreement. </p>
                <p>5. Don’t send money for a rental overseas. </p>
                <p>6. Don’t give your personal information or Social Security number to a property owner without
                    verifying their identity.</p>
            </Grid>
        </Grid>
    );
};

export default ScamsAlert;
