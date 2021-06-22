import {useState} from 'react';
import { makeStyles} from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import houseImage from '../../image/house.jpg';
import {serverURL} from '../../utils/auth';
import {
  MobileStepper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    position: "relative",
  },
  img: {
    overflow: "hidden",
    display: "block",
    width: "100%",
  },
  leftBtn: {
    position: "absolute",
    top: "49%",
    left: "0",
    backgroundColor: "#ffffff63",
    borderRadius: "50%",
    minWidth: "auto",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#3c52b2",
      },
  },
  rightBtn: {
    position: "absolute",
    top: "49%",
    right: "0",
    backgroundColor: "#ffffff63",
    borderRadius: "50%",
    minWidth: "auto",
    "&:hover": {
        backgroundColor: "#fff",
        color: "#3c52b2",
      },
  },
}));

export default function ImageSlider({onClick, pictures}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const defaultPicture = [houseImage];
  const pictureArray = Object.values(JSON.parse(pictures));
  const maxSteps = pictureArray.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClick = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep > maxSteps - 2 ? 0 : prevActiveStep + 1
    );
  };

  return (
    <>
      <div className={classes.root}>
        {!pictureArray.length ? 
          <img
          className={classes.img}
          src={houseImage}
          alt="rent finder house image"
          {...(onClick && {
            onClick: onClick,
            style: { cursor: "pointer", width: "100%", height:"auto"}
          })}
        />
         :
         <>
         <img
          className={classes.img}
          src={`${serverURL}/uploads/${pictureArray[activeStep]}`}
          alt="rent finder house image"
          {...(onClick && {
            onClick: onClick,
            style: { cursor: "pointer", width: "100%", height:"auto"}
          })}
        />
        {onClick ? (
          <>
            <Button
              size="small"
              onClick={handleClick}
              classes={{ root: classes.rightBtn }}
            >
              <KeyboardArrowRight fontSize="large" />
            </Button>
            <Button
              size="small"
              onClick={handleClick}
              classes={{ root: classes.leftBtn }}
            >
              <KeyboardArrowLeft fontSize="large" />
            </Button>
          </>
        ) : (
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
                
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
               <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        )}
         </>
        }
      </div>
    </>
  );
}
