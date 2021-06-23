import {Button} from "@material-ui/core";
import React, {useState} from "react";
import mail from "../../../../image/mail.png"
import registration from "../../../../image/registration.png"
import Card from "./Card"

const inquiryDetails = [
    {
        name: "Mahi K",
        shortName: "Mk",
        room: "Looking for room in shared apartment or studio",
        lookingFor: "Frankfort am Main, Looking from 19 June 2021",
        regard: "Mahendra",
        readLess: true
    },
    {
        name: "LOVELY DAVY",
        shortName: "LD",
        room: "Looking for room",
        lookingFor: "Freising, Looking from 1 September 2021",
        regard: "Mahendra",
        readLess: true
    }
]

const InquiryList = () => {
    const[isShowLess, setShowLoss] = useState(false)
    const[specificCardDetail, setSpecificCardDetail] = useState({
        name: "LOVELY DAVY",
        shortName: "LD",
        room: "Looking for room",
        lookingFor: "Freising, Looking from 1 September 2021",
        regard: "Mahendra",
        readLess: true
    })

    const showLessAndMore =(cardDetail)=> {
        setShowLoss(!isShowLess)
        if (cardDetail) {
            setSpecificCardDetail(cardDetail)
        }
    }

    return(
    <React.Fragment>
        {
            isShowLess ? (
                <div className="inquiry-list">
                    <div className="btn">
                        <div/>
                        <div className="all-button">
                            <div>
                                <div className="display">
                                    <div className="short-name">
                                        <span>  {specificCardDetail.shortName || ""}</span>
                                    </div>
                                    <span className="name">{specificCardDetail.name || ""}</span>
                                </div>
                                <div className="mt-30">
                                    <div className="room">
                                        {specificCardDetail.room || ""}
                                    </div>
                                    <div className="mt-20 looking-for">
                                        {specificCardDetail.lookingFor || ""}
                                    </div>
                                    <div className="mt-30">
                                        <Button variant="contained" className="read-button" onClick ={showLessAndMore} fullWidth>Read less</Button>
                                    </div>
                                    <div className="card">
                                        <span>Hi,<br/><br/>
                                        I will be shifting to Frankfurt from Karlsruhe for work. I am working as Technical Lead in software company. I am married person and family is in India and looking for minimum 6months accommodation.
                                        Let me know if any further details needed<br/><br/>
                                        Regards <br/>Mahendra</span>
                                    </div>
                                    <div className="mt-20 mail-text">
                                        <div>
                                            <img src={registration} alt="mail" />
                                            <span className="ml-7">City registration needed</span>
                                        </div>
                                        <div>
                                            <img src={mail} alt="mail" />
                                            <span className="ml-7">xyz@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div/>
                    </div>
                </div>
            )  : (
                <Card showLessAndMore={showLessAndMore} inquiryDetails={inquiryDetails}/>
            )
        }
    </React.Fragment>
    )
}
export default InquiryList