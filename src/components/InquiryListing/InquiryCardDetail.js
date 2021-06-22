import React,{useContext}  from 'react'
import {
    Typography,
    Grid,
  } from "@material-ui/core";
  import marked from "marked";
import {displayDate, diaplayIcon} from '../../utils/helper'

const InquiryCardDetail = ({inquiry}) => {

    return (
        <div>
            <Grid container item xs={12} style={{ position: "relative" }}>
            <Grid item xs={12}>
                <Typography variant="body1" gutterBottom 
                className="text-warp-container"
                style={{
                  border: "1px solid #012f53",
                  backgroundColor: "rgba(219,226,239, 0.1)",
                  borderRadius: "0.1em",
                  padding: "1rem",
                }}
                dangerouslySetInnerHTML={{ __html: marked(inquiry.description) }}
                />
                <Typography variant="body1" gutterBottom>
                    {diaplayIcon('fas fa-file-alt')} {inquiry.city_registration == 'true' ? " City registration needed" :" City registration not needed"}
                    </Typography>

                     {inquiry.user.mobile && (
                        <Typography variant="body1" gutterBottom>
                            {diaplayIcon('fab fa-whatsapp', '1.4rem')}  {inquiry.user.mobile}
                        </Typography>
                    )}
                    {inquiry.user.email && (
                        <Typography variant="body1" gutterBottom>
                            {diaplayIcon('fas fa-envelope')}  {inquiry.user.email}
                        </Typography>
                    )}
              </Grid>

              
                
            </Grid>
        </div>
    )
}

export default InquiryCardDetail
