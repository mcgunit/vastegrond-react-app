import React from "react";
import { Grid } from "@mui/material";

const Footer = props => {
  return (
    <footer style={{backgroundColor: "#2196F3", color: "white", zIndex: 2}} className="footer">
        <Grid container item xs={12} alignItems="center" style={{minHeight: "100%", fontSize: "10px"}}>
            <Grid container item xs={4} justifyContent="flex-start">
              <p  style={{textAlign: "left", marginLeft: 10}}>
                {1900 + new Date().getYear()}
              </p>
            </Grid>
            <Grid  container item xs={4} justifyContent="center">
              <p style={{textAlign: "center"}}>
                &copy;<a
                  href=""              
                  target="_blank"
                  className={"footerlink"}
                >
                  Vastegrond vzw
               </a>
              </p>
            </Grid>
          </Grid>
    </footer>
  );
};

export default Footer;
