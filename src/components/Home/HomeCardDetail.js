import {useContext, useEffect} from "react";
import {
    Typography,
    Breadcrumbs,
    Grid,
    Container,
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import ImageSlider from "./ImageSlider";
import {ListingContext} from "../../context/ListingContext";
import {placeType} from "../../data/listingData";
import {displayDate, diaplayIcon} from "../../utils/auth";
import marked from "marked";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {ScrollUp} from '../../utils/helper'

const HomeCardDetail = () => {
    const {getListingById, houseDataById} = useContext(ListingContext);

    const {id} = useParams();
    let placeTypeOption = [];
    let location = "";

    if (houseDataById) {
        const {street_name, street_number, city, post_code} = houseDataById;
        placeTypeOption = Object.values(placeType).filter(
            (item) => item.id == houseDataById.type
        );
        location = street_name + (street_number ? " " + street_number : "") + ", " + city + " " + post_code;
    }


    useEffect(() => {
        if (id) getListingById(id);
        ScrollUp();
    }, []);

    return (
        <>
            {houseDataById && (
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid container item xs={12} style={{position: "relative"}}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h5"
                                    style={{fontWeight: "bold"}}
                                    gutterBottom
                                >
                                    {location}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Breadcrumbs separator="›" aria-label="breadcrumb">
                                    <Link color="inherit" to="/">
                                        {houseDataById.city}
                                    </Link>
                                    <Typography color="textPrimary">
                                        {houseDataById.street_name}
                                    </Typography>
                                </Breadcrumbs>
                            </Grid>
                            <Grid item xs={12}>
                                <ImageSlider pictures={houseDataById.pictures}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h2"
                                    color="primary"
                                    style={{fontSize: "1.3rem", fontWeight: "bold"}}
                                >
                                    €{houseDataById.rent}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    monthly rent
                                </Typography>
                                <div style={{height: "1rem"}}></div>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" className="text-warp-container" gutterBottom color="primary"
                                            style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                                    {houseDataById.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom
                                            className="text-warp-container"
                                            style={{
                                                border: "1px solid #012f53",
                                                backgroundColor: "rgba(219,226,239, 0.1)",
                                                borderRadius: "0.3em",
                                                padding: "1rem",
                                            }}
                                            dangerouslySetInnerHTML={{__html: marked(houseDataById.description)}}
                                />
                                <div style={{height: "1.5rem"}}></div>
                            </Grid>

                            <Grid container item xs={12}>
                                <Grid item xs={12}>
                                    <Typography variant="body2" gutterBottom>
                                        {diaplayIcon('fas fa-file-alt')} City registration
                                        is{houseDataById.city_registration == 'true' ? " possible." : " not possible."}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {diaplayIcon('fas fa-home')} Property type: {placeTypeOption[0].option}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {diaplayIcon('fas fa-calendar-plus')} Available
                                        From: {displayDate(houseDataById.available_from)}
                                    </Typography>
                                    {houseDataById.min_rental_period ? (
                                        <Typography variant="body2" gutterBottom>
                                            {diaplayIcon('fas fa-calendar-check')} Minimum rental
                                            preriod: {houseDataById.min_rental_period}{" "}
                                            months
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                </Grid>
                            </Grid>

                            <Grid container item xs={12}>
                                <Grid item xs={12}>
                                    {houseDataById.member ? (
                                        <Typography variant="body2" gutterBottom>
                                            {diaplayIcon('fas fa-user-friends')} Total number of
                                            Housemates: {houseDataById.member}
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    {houseDataById.total_size ? (
                                        <Typography variant="body2" gutterBottom>
                                            {diaplayIcon('fas fa-ruler')} Totle House
                                            Size: {houseDataById.total_size} m²
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    {houseDataById.room_size ? (
                                        <Typography variant="body2" gutterBottom>
                                            {diaplayIcon('fas fa-ruler-combined')} Totle Room
                                            Size: {houseDataById.room_size} m²
                                        </Typography>
                                    ) : (
                                        ""
                                    )}
                                    <div style={{height: "1.5rem"}}></div>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                item
                                xs={12}
                                md={4}
                                style={{
                                    border: "2px solid #012f53",
                                    color: '#012f53',
                                    backgroundColor: "#dbe2ef",
                                    borderRadius: "0.3em",
                                    padding: "1rem",
                                }}
                            >
                                <Grid item xs={12}>
                                    <Typography variant="h5" gutterBottom>
                                        Contact
                                    </Typography>
                                </Grid>

                                <Grid container item xs={12}>
                                    <Grid item xs={1}>
                                        {diaplayIcon('far fa-id-card')}
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1" gutterBottom>
                                            {houseDataById.user.first_name}{" "}
                                            {houseDataById.user.last_name}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                {houseDataById.user.mobile && (
                                    <Grid container item xs={12}>
                                        <Grid item xs={1}>
                                            {diaplayIcon('fab fa-whatsapp', '1.4rem')}
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Typography variant="body1" gutterBottom>
                                                {houseDataById.user.mobile}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )}

                                <Grid container item xs={12}>
                                    <Grid item xs={1}>
                                        {diaplayIcon('fas fa-envelope')}
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography variant="body1" gutterBottom>
                                            {houseDataById.user.email}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <div style={{
                            border: "1px solid #d33e03",
                            borderRadius: "0.3em",
                            padding: "0.1rem",
                            marginTop: "1rem",
                            color: '#d33e03'
                        }}>
                            <p>Warning: Avoid Scams more information<Link to="/scams" style={{
                                color: '#d33e03',
                                fontWeight: '500'
                            }}> here</Link></p>
                        </div>

                    </Grid>
                </Container>
            )}
        </>
    );
};


export default HomeCardDetail;
