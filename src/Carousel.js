
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { makeStyles } from '@material-ui/core/styles';

import 'animate.css/animate.css';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

import "./Carousel.css";


const useStyles = makeStyles((theme) => ({

  text: {

    fontSize: '12px',

  }

}));
export default function Carousel() {                       //carousel
  const classes = useStyles();


  return (


    <OwlCarousel className='owl-theme' items="1"

      loop={false}
      navRewind={false}

      nav>

      <div className={classes.texts}>

        <figtitle style={{

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}><b>Step1</b></figtitle>

        <img src={img1} alt={img1} />
        <figcaption style={{
          padding: "4px",


        }} className={classes.text}>

          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choose an area with <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bright Lighting</b></p>
        </figcaption>

      </div>
      <div class='item'>
        <figtitle style={{
          padding: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}> <b>Step2</b></figtitle>
        <img src={img2} alt={img2} />
        <figcaption style={{
          padding: '0.6px',

        }} className={classes.text}>
          <p><b> Clean</b> phone Camera <b>lens </b>before use</p>
        </figcaption>
      </div>
      <div class='item'>
        <figtitle style={{
          padding: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}><b>Step3</b></figtitle>
        <img src={img3} alt="img3" />
        <figcaption style={{
          padding: ".6px",

        }} className={classes.text}>
          <p style={{ spacing: "6px" }}>
            Place <b>A4 sheet </b>on <b>Dark Non-shiny surface</b> and place seeds on the tip of paper
       </p> </figcaption>
      </div>

      <div class='item'>
        <figtitle style={{
          padding: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}><b>Step4</b></figtitle>
        <img src={img4} alt="img2" />
        <figcaption style={{

        }} className={classes.text}>
          <p> Hold the phone <b>parallel</b> to paper</p>
        </figcaption>

      </div>
      <div class='item'>
        <figtitle style={{
          padding: "1px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}><b>Step5</b></figtitle>
        <img src={img5} alt="img2" />
        <figcaption style={{

        }} className={classes.text}>
          <p> Ensure full paper is covered and take the picture</p>
        </figcaption>

      </div>
    </OwlCarousel>

  )
}


