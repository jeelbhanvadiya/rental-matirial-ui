import React from "react";
import './PropertyDetail.scss'
import {Button, Grid} from "@material-ui/core";
import contact from '../../image/contact.png';
import mail from '../../image/mail.png'
import house01 from '../../image/house01.png'
import { Carousel } from "react-responsive-carousel";

const PropertyDetail = () => {
    return (
        <div className="main">
            <Grid container>
                <Grid item xs={12} md={12}>
                    <h1 className="title">
                        One room in a 2BHK apartment (65 sqm)
                    </h1>
                    <h3>
                        Berlin > Küstriner Straße
                    </h3>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="price-title">
                        <h3>
                            € 650 / per weak
                        </h3>
                    </div>
                    <div className="small-description">
                        <div className="inner-description"> City registration is not possible.</div>
                        <br/>
                        <div className="inner-description"> Property type: Apartment</div>
                        <br/>
                        <div className="inner-description"> Available From: 1 June 2021</div>
                        <br/>
                        <div className="inner-description"> Minimum rental preriod: 3 months</div>
                        <br/>
                        <div className="inner-description"> Total number of Housemates: 1</div>
                        <br/>
                        <div className="inner-description"> Totle House Size: 65 m²</div>
                        <br/>
                        <div className="inner-description"> Totle Room Size: 25 m²</div>
                        <br/>
                    </div>
                    <div className="box-decription">
                        Hello!<br/><br/>

                        I am subletting one room in my 2BHK apartment (65 sqm).<br/>
                        It is close to S-bahn landsberger allee. The nearest tram station is a 3 min walk from the
                        apartment and the nearest supermarket is Netto which is a 5 min walk from the
                        apartment.<br/><br/>

                        The apartment is fully furnished with all the kitchen appliances, furniture and Wifi.<br/>
                        It has a big living room and 2 bedrooms.<br/>
                        It is available from 1st June 2021 until 30th September 2021 with a possibility of
                        extension.<br/><br/>
                    </div>
                    <div className="buttons">
                        <Grid container>
                            <Grid item xs={12} md={3}>
                                <Button className='button-small' variant="contained" fullWidth>Contact</Button>
                            </Grid>
                            <Grid item xs={12} md={9} className="pd-5">
                                <div className="small-box-decription">
                                    <img src={contact}/>xyz abc<br/>
                                    <img src={mail}/>xyz@gmail.com
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h1 className="title">
                        <Carousel showThumbs={false}>
                            <div>
                                <img alt="" src={house01} />
                            </div>
                            <div>
                                <img alt="" src={house01} />
                            </div>
                            <div>
                                <img alt="" src={house01} />
                            </div>
                            <div>
                                <img alt="" src={house01} />
                            </div>
                        </Carousel>
                    </h1>
                </Grid>
            </Grid>
        </div>
    )
};

export default PropertyDetail
