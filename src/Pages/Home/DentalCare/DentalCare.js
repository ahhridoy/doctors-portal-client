import React from "react";
import Grid from "@mui/material/Grid";
import treatment from "../../../images/treatment.png";
import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

const DentalCare = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "500px" }} src={treatment} alt=""></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: "left",
          }}
        >
          <Typography
            variant="h3"
            style={{ color: "black", fontWeight: "600px", marginTop: "80px" }}
          >
            Expectional Dental Care, on Your Terms
          </Typography>
          <Typography
              variant="h6"
              sx={{ my: 5 }}
              style={{ color: "gray", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              facere totam aliquam praesentium vel. Amet veniam odio vero
              doloremque laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero
              doloremque laborum.
            </Typography>
            <Button type="submit" variant="contained">Learn More</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
