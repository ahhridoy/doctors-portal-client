import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const testimonials = [
  {
    id: 1,
    name: "Winson Herry",
    address: "California",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.",
    img: people1,
  },

  {
    id: 2,
    name: "Winson Herry",
    address: "California",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.",
    img: people2,
  },

  {
    id: 3,
    name: "Winson Herry",
    address: "California",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.",
    img: people3,
  },
];

const Testimonial = () => {
  return (
    <Container>
      <Typography
        sx={{
          color: "success.main",
          textAlign: "left",
          fontWeight: "bold",
          mt: 5,
        }}
        variant="h5"
        gutterBottom
        component="div"
        style={{}}
      >
        Testimonial
      </Typography>
      <Typography
        sx={{ textAlign: "left", fontWeight: "bold" }}
        variant="h3"
        component="div"
        gutterBottom
      >
        What's Your Patients <br /> Says
      </Typography>

      <Grid container spacing={2}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: '20px'}}>
              <Typography
                variant="h6"
                sx={{ my: 5 }}
                style={{ color: "gray", fontSize: 14, fontWeight: 300 }}
              >
                {testimonial.details}
              </Typography>
              <div style={{ display: "flex" }}>
                <div>
                  <img src={testimonial.img} alt="" />
                </div>
                <div>
                  <Typography
                    sx={{
                      color: "info.main",
                      textAlign: "left",
                      fontWeight: "bold",
                      mx: 5,
                    }}
                    variant="h5"
                    gutterBottom
                    component="div"
                    style={{}}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      textAlign: "left",
                      mx: 5,
                    }}
                    variant="h6"
                    gutterBottom
                    component="div"
                    style={{}}
                  >
                    {testimonial.name}
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
