import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import tick from "../Stepper/img/tick.svg";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Complaint details", "Suspects details", "Preview & submit"];
}
const states = [
  {
    value: "Assam",
    label: "Assam",
  },
  {
    value: "UP",
    label: "UP",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
];
const crime = [
  {
    value: "Domestic abuse",
    label: "Domestic abuse",
  },
  {
    value: "Childhood abuse",
    label: "Childhood abuse",
  },
  {
    value: "Fraud",
    label: "Fraud",
  },
  {
    value: "Modern Slavery",
    label: "Modern Slavery",
  },
];
const ngo = [
  {
    value: "NGO A",
    label: "NGO A",
  },
  {
    value: "NGO B",
    label: "NGO B",
  },
  {
    value: "NGO C",
    label: "NGO C",
  },
  {
    value: "NGO D",
    label: "NGO D",
  },
];

const BasicForm = () => {
  const { control } = useFormContext();
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Typography variant="h5" style={{ display: "block", color: "#8676FF" }}>
        Location Details
      </Typography>
      <Controller
        control={control}
        name="crime"
        render={({ field }) => (
          <TextField
            id="filled-select-currency"
            select
            label="Type of crime"
            value={crime}
            onChange={handleChange}
            helperText="Please select catagory"
            variant="filled"
            {...field}
          >
            {crime.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <h3
        style={{
          color: "#8676FF",
          marginTop: "2rem",
          fontSize: "1.2rem",
          fontWeight: "300",
        }}
      >
        Complaint/Incident details
      </h3>
      <p style={{ color: "#FF708B", fontWeight: "300" }}>
        Kindly fill in the below form with details of crime.{" "}
      </p>
      <Controller
        control={control}
        name="Date"
        render={({ field }) => (
          <TextField
            id="Date"
            label="Apporximate date & time of
                incident/crime"
            variant="standard"
            placeholder="DD/MM/YYYY"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="State"
        render={({ field }) => (
          <TextField
            id="filled-select-currency"
            select
            label="Select Your State"
            value={currency}
            onChange={handleChange}
            helperText="Please select your state"
            variant="filled"
            {...field}
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      <Controller
        control={control}
        name="District"
        render={({ field }) => (
          <TextField
            id="District"
            label="District/P.O."
            variant="standard"
            placeholder="Enter Your District/P.O."
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Reason"
        render={({ field }) => (
          <TextField
            id="ReasonDelay"
            label="Reason for delay in reporting"
            variant="standard"
            placeholder="Enter Your reason for delay in reporting"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="AdditionalInfo"
        render={({ field }) => (
          <TextField
            id="AdditionalInfo"
            label="Additional
information "
            variant="standard"
            placeholder="Please provide any additional 
info"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const AdressForm = () => {
  const { control } = useFormContext();
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Typography
        variant="h5"
        style={{ display: "block", color: "#8676FF", paddingBottom: "2rem" }}
      >
        Address Proof
      </Typography>
      <Controller
        control={control}
        name="SuspectName"
        render={({ field }) => (
          <TextField
            id="SuspectName"
            label="Suspect Name"
            variant="standard"
            placeholder="Enter the Suspect Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="NearbyNgo"
        render={({ field }) => (
          <TextField
            id="filled-select-currency"
            select
            label="Nearby NGO"
            value={currency}
            onChange={handleChange}
            helperText="Please select Nearby NGO"
            variant="filled"
            {...field}
          >
            {ngo.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        control={control}
        name="upload"
        render={({ field }) => (
          <input
            type="file"
            className={style.file_upload}
            id="exampleFormControlFile1"
            style={{ display: "block", marginTop: "1rem" }}
          />
        )}
      />
            <Controller
        control={control}
        name="SusInfo"
        render={({ field }) => (
          <TextField
            id="SusInfo"
            label="Any other informations/details"
            variant="standard"
            placeholder="Enter other informations about the Suspect"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const Preview = () => {
  return (
    <>
      <Typography variant="h4" style={{ display: "block" }}>
        Final Preview
      </Typography>
      <Typography
        variant="caption"
        style={{ display: "block", paddingBottom: "1rem" }}
      >
        Please review the information you have filled
      </Typography>
      <Paper variant="Box" style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" style={{ display: "block", padding: "2rem" }}>
        Complaint/Incident details
        </Typography>
        <Typography
          variant="h7"
          style={{ display: "block", paddingLeft: "2rem" }}
        >
          Catagory of crime :
        </Typography>
        <Typography
          variant="h7"
          style={{ display: "block", paddingLeft: "2rem", marginTop: "2rem" }}
        >
          Apporximate date & time of
 incident/crime :
        </Typography>
        <Typography
          variant="h7"
          style={{
            display: "block",
            paddingLeft: "2rem",
            marginTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          State/Uts :
        </Typography>
        <Typography
          variant="h7"
          style={{
            display: "block",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
          Dist/PO :
        </Typography>
        <Typography
          variant="h7"
          style={{
            display: "block",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
         Reason for delay in reporting :
        </Typography>
        <Typography
          variant="h7"
          style={{
            display: "block",
            paddingLeft: "2rem",
            paddingBottom: "2rem",
          }}
        >
        Please provide any additional
information about the crime/incident :
        </Typography>
      </Paper>
    </>
  );
};
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <AdressForm />;
    case 2:
      return <Preview />;
    default:
      return "unknown step";
  }
}
const ReportingForm = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
        crime: "",
      Date: "",
      Reason: "",
      AdditionalInfo: "",
      District: "",
      State: "",
      SuspectName: "",
      NearbyNgo: "",
      SusInfo: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  // const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const handleNext = (data) => {
    if (activeStep === steps.length - 1) console.log(data);
    setActiveStep(activeStep + 1);
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div style={{ background: "#F2F5F7", padding: "0rem" }}>
      {activeStep <= 2 && (
        <div className={style.text}>
          <Typography
            variant="h4"
            style={{ display: "block", padding: "1rem", color: "#383874" }}
            align="center"
          >
            Report Anonymously
          </Typography>
        </div>
      )}

      {activeStep === steps.length ? (
        <Box
          style={{ padding: "2rem", paddingBottom: "5rem", marginTop: "3rem" }}
        >
          <Box style={{ marginTop: "2rem" }}>
            <Typography variant="h4" align="center">
            Complaint Registered Successfully
            </Typography>
            <Typography variant="h6" align="center" style={{color:"#828282"}}>
              Thank you for your valuable information
            </Typography>
            <Box align="center">
              <img
                src={tick}
                alt=""
                style={{ width: "12%", marginTop: "3rem" }}
              />
            </Box>
            <div className={style.buttons}>
            <button > <Link to='/' style={{color:"#fff",textDecoration:"none"}}>Return to Home Page</Link> </button>
            </div>
          </Box>
        </Box>
      ) : (
        <>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            style={{ background: "#F2F5F7" }}
          >
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(handleNext)}
              style={{ background: "#F2F5F7" }}
            >
              <div className={style.main_div}>
                <div className={style.left}>{getStepContent(activeStep)}</div>
              </div>
              <div className={style.buttons}>
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Edit Previous
                </Button>
                {/* {isStepOptional(activeStep) && (
                      <Button
                        className={classes.button}
                        variant="contained"
                        style={{background:" linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%)",color:"#fff"}}
                        onClick={handleSkip}
                      >
                        skip
                      </Button>
                    )} */}
                <Button
                  className={classes.button}
                  variant="contained"
                  // onClick={handleNext}
                  type="submit"
                  style={{
                    background:
                      " linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%)",
                    color: "#fff",
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Save & Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default ReportingForm;