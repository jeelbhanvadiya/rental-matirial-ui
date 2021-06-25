import React, {useState} from "react"
import {Button, Grid} from "@material-ui/core";
import callIcon from "../../image/Home/callIcon.png"
import listIcon from "../../image/Home/listIcon.png"
import locationIcon from "../../image/Home/locationIcon.png"
import userIcon from "../../image/Home/userIcon.png"
import { makeStyles } from '@material-ui/core/styles';
import bergin from "../../image/Home/bergin.png"
import bremen from "../../image/Home/bremen.png"
import bremen1 from "../../image/Home/bremen.png"
import humburg from "../../image/Home/humburg.png"
import essen from "../../image/Home/essen.png"
import koien from "../../image/Home/koien.png"
import munish from "../../image/Home/bergin.png"
import nuremburg from "../../image/Home/bergin.png"
import stuttgurd from "../../image/Home/bergin.png"
import durtmund from "../../image/Home/bergin.png"
import leipzip from "../../image/Home/bergin.png"
import frankfert from "../../image/Home/bergin.png"
import dressden from "../../image/Home/bergin.png"
import honeover from "../../image/Home/haneover.png"
import downIcon from "../../image/Home/downIcon.png"
import leftDesign from "../../image/Home/leftDesign.png"
import rightDesign from "../../image/Home/rightDesign.png"
import blob1 from "../../image/Home/blog1.jpeg"
import blob2 from "../../image/Home/blog2.jpeg"
import blob3 from "../../image/Home/blob3.jpeg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Home.scss"

const cardList = [
    {
        icon: callIcon,
        name: "Avoid Brokers",
        description: "- Use our portal to directly \n" +
            "  meet the tenants/landlords \n" +
            "- overcome brokerage fees"
    },
    {
        icon: listIcon,
        name: "Free Listing",
        description: "- List property on our portal\n" +
            "   free of cost & gain leads"
    },
    {
        icon: locationIcon,
        name: "Shortlist Locations",
        description: "- Access property options and \n" +
            "  enquiries from numerous \n" +
            "  locations & cities"
    },
    {
        icon: userIcon,
        name: "Enquiry",
        description: "- Post enquiry about \n" +
            "   your interests seamlessly \n" +
            "   through our portal"
    }
]

const uniqSpaceList =[
    {
        icon: bergin,
        name: "Berlin"
    },
    {
        icon: bremen,
        name: "Bremen"
    },
    {
        icon: bremen1,
        name: "Bremen"
    },
    {
        icon: humburg,
        name: "Humburg"
    },
    {
        icon: essen,
        name: "Essen"
    },
    {
        icon: koien,
        name: "Koein"
    },
    {
        icon: munish,
        name: "Munish"
    },
    {
        icon: nuremburg,
        name: "Nuremburg"
    },
    {
        icon: stuttgurd,
        name: "Stuttgurg"
    },
    {
        icon: durtmund,
        name: "Durtmud"
    },
    {
        icon: leipzip,
        name: "Leipzip"
    },
    {
        icon: frankfert,
        name: "Frankfert"
    },
    {
        icon: dressden,
        name: "Berlin"
    },
    {
        icon: dressden,
        name: "Dressden"
    },
    {
        icon: honeover,
        name: "Honeover"
    },
]

const corosoulList = [
    {
        icon: blob1,
        description: "Rental contracts \n" +
            "& Housing rights \n" +
            "in Germany"
    },
    {
        icon: blob2,
        description: "City Registration"
    },
    {
        icon: blob3,
        description: "Proof of Residence Certificate",
        subDescription: "wohnungsgeberbestätigung"
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {
    const[defaultCity, setDefaultCity] = useState(9)
    const classes = useStyles();

    const moreCity = () => {
        setDefaultCity(defaultCity + 9)
    }

    return(
        <div className="home">
            <div className="header-main">
                <img src={leftDesign} className="w-40"/>
                <span className="card-header">
                    Rentfinder Edge
                </span>
                <img src={rightDesign} className="w-40"/>
            </div>
            <div  className={`card-main ${classes.root}`}>
                <Grid container spacing={3}>
                    {
                        cardList.map((item, index) => {
                            return(
                                <Grid item sm={3}>
                                    <div className="card">
                                        <img src={item.icon} alt={item.name} height={50} width={50} className="text-center"/>
                                        <div className="name">{item.name || ""}</div>
                                        <div className="description">{item.description || ""}</div>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
            <div className="header-main">
                <img src={leftDesign} className="w-40"/>
                <span className="card-header">
                     Discover Unique Places
                </span>
                <img src={rightDesign} className="w-40"/>
            </div>
           <div className="uniq-place">
               <Grid container spacing={3}>
                   {
                       uniqSpaceList.slice(0, defaultCity).map((item, index) => {
                           return(
                               <Grid item md={4}>
                                   <img src={item.icon} className="country-image" height={230} width={280}/>
                                   <div className="country-name">{item.name || ""}</div>
                               </Grid>
                           )
                       })
                   }
               </Grid>
           </div>
            {
                uniqSpaceList.length > defaultCity &&
                (
                    <div className="text-center">
                        <Button variant="contained" className="more-city-button" onClick={moreCity} fullWidth>
                            <span>more cities</span>
                            <img height={12} src={downIcon} className="ml-25"/>
                        </Button>
                    </div>
                )
            }
            <div className="blog">
                <img src={leftDesign} className="w-47"/>
                <span className="card-header">
                    Blob
                </span>
                <img src={rightDesign} className="w-47"/>
            </div>
            <div className="corosl">
                <Carousel selectedItem={3}>
                    {
                        corosoulList.map((item, index) =>{
                            return(
                                <div className="item" style={{backgroundImage: `url(${item.icon})`}}>
                                    <div className="description">{item.description || ""}</div>
                                    <div className="sub">{item.subDescription || ""}</div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default Home