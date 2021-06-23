import {Button} from "@material-ui/core";
import React from "react";

const Card = (props) => {
    const {showLessAndMore, inquiryDetails} = props
    return(
        <React.Fragment>
            <div className="inquiry-list">
                <div className="btn">
                    <div/>
                    <div className="all-button">
                        {
                            inquiryDetails.map((item, index) => {
                                return(
                                    <div className="card mb-20" key={index}>
                                        <div className="mt-20 display">
                                            <div className="short-name">
                                                <span>  {item.shortName || ""}</span>
                                            </div>
                                            <span className="name">{item.name || ""}</span>
                                        </div>
                                        <div className="mt-30">
                                            <div className="room">
                                                {item.room || ""}
                                            </div>
                                            <div className="mt-20 looking-for">
                                                {item.lookingFor || ""}
                                            </div>
                                            <div className="mt-30 mb-20">
                                                <Button variant="contained" className="read-button" onClick={() => showLessAndMore(item)} fullWidth>Read more</Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div/>
                </div>
            </div>
    </React.Fragment>
    )
}
export default Card