import {Grid, Typography} from "@material-ui/core";
import {useEffect} from "react";
import aboutUsImage from '../../image/about-us.jpg'
import {ScrollUp} from '../../utils/helper';
import {Helmet} from 'react-helmet';

const AboutUs = () => {

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
                    Rent Finder - India's best Rental Platform
                </title>
                <meta name="description" content="India's best rental platform with many flat, rooms, house and apartments for rent,
                rent finder provide a centralized platform for renting or finding houses or accommodation. "/>
                <meta name="keywords" content="India's best Rental Platform"/>
            </Helmet>

            <Grid item xs={9}>
                <div style={{position: 'relative', zIndex: '-1', marginBottom: '0.5rem'}}>
                    <img src={aboutUsImage} width='100%' height="auto" alt="aboutus" style={{borderRadius: '0.2rem'}}/>
                    <Typography variant="h5" className="aboutus-title">
                        About Us
                    </Typography>
                </div>
                <h2>Who We Are</h2>
                <Typography variant="body1">
                    Rent Finder was started with an idea for providing some of the best home rentals in Germany.
                    Especially built for the Indian community residing in the country, the platform showcases multiple
                    accommodation options listed by not only Indians but fellow Germans as well.
                </Typography><br/>
                <Typography variant="body1">
                    Rent Finder is your ultimate premium partner that offers multiple home rental options like furnished
                    or unfurnished apartments on a temporary or permanent basis. The platform has been seamlessly
                    designed to offer numerous home rental options within your preferred location or budget in just a
                    few easy steps.
                </Typography><br/>
                <h2>What We Do</h2>
                <Typography variant="body1">
                    Rent Finder is a high-end property portal that caters to a niche market of Germany. With A
                    Population of more than 840 million in the year 2020, Germany witnesses tens of thousands of Indians
                    every year who are always looking out for homes on lease.
                </Typography><br/>
                <Typography variant="body1">
                    The platform of Rent Finder is based on rigorous research with an innovative initiative and unique
                    product development that has been readily accepted by a number of users. In an attempt to best serve
                    our fellow Indians and connect them with prospective homeowners, Rent Finder is constantly invented,
                    upgraded and evaluated.
                </Typography>
                <br/>
                <Typography variant="body1">
                    Having said that, Rent Finder is an online portal that showcases widely acclaimed properties from
                    all the nook and corners of Germany in the country. It is here that some of the top-notch properties
                    are highlighted deemed fit for Indian e.settlers.
                </Typography>
                <br/>
                <Typography variant="body1">
                    Till date, Rent Finder has successfully helped many Indians find their dream home in Germany and
                    continues to fulfil the dreams many more.
                </Typography>
                <br/>
                <h2>Vision</h2>
                <Typography variant="body1">
                    To become one of the most preferred online marketplace for Indians to search for rental homes,
                    apartments, rooms in Germany.
                </Typography><br/>
                <h2>Mission</h2>
                <Typography variant="body1">
                    To meet the needs of our Indian customers with a quality of service and good rental options and set
                    the standard for top-notch property portal in Germany .
                </Typography><br/>
                <h2>Why Us?</h2>
                <Typography variant="body1">
                    Unlike any other online rental portal that offers a selection of homes on rent, Rent Finder offers
                    you a culture that is all about bringing people from Indian community together.<br/>
                    The dynamism and offerings of this portal is carefully handpicked in such a way that it connects
                    every single Indian residing in Germany and helps them with some of the best available homes in the
                    country.<br/>
                    Rent Finder is just a mere effort to bridge the gap between Indian tenants and homeowners and bring
                    both the culture together. We act as a guardian or a guide for every single tenant who is out there
                    looking for their dwelling of dreams.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default AboutUs;
