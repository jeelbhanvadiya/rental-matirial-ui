import React, {useState} from "react"
import InquiryList from "./Components/InquiryList/InquiryList.js"
import "./PersonalDetail.scss"
import {Button, Grid} from "@material-ui/core";

const inquiryListDetail = ["My house list", "My inquiry list"]
const houseList = [{name: "All", value: []} , {name: "Publish", value: ""}, {name: "unPublished", value: []}]


const PersonalDetail = () => {
    const [selectedList, setSelectedList] = useState("My house list")

    const SelectInquiryList = (item) => {
        setSelectedList(item)
    }

    return(
        <div className="personal-detail">
          <div className="btn">
              <div/>
              <div className="all-button">
                  <div className="d-inherit">
                      {
                          inquiryListDetail.map((item, index) => {
                              return(
                                  <div key={index} className={`${index > 0 && "ml-40"} ${!(selectedList === item) && "custom-color"}`}>
                                      <Button variant="contained" className={`default ${(selectedList === item )&& "custom-button"}`} onClick={() => SelectInquiryList(item)} fullWidth>{item || ""}</Button>
                                  </div>
                              )
                          })
                      }
                  </div>
                  <div className="mt-20">
                     <div className="d-inherit w-100">
                         {
                             !(selectedList === "My inquiry list")  &&  houseList.map((item, index) => {
                                 return(
                                     <Grid container>
                                         <Grid item xs={4} md={4} className="padding10">
                                                 <Button variant="contained" className="custom-small-button" fullWidth>{item.name}{`(${item.value.length})`}</Button>
                                         </Grid>
                                     </Grid>
                                 )
                             })
                         }
                     </div>
                      {
                          selectedList === "My inquiry list" && <InquiryList />
                      }
                  </div>
              </div>
              <div/>
          </div>
            <div className={!(selectedList === "My inquiry list") && "mt-70"}>
                <div className="empty-list">
                    {!(selectedList === "My inquiry list") && "You have not created any Listing yet"}
                </div>
            </div>
        </div>
    )
}
export default PersonalDetail