import { Stepper, Step, StepLabel } from "@mui/material";

const steps = [
  "Order Placed",
  "Confirmed",
  "Cooking",
  "Shipped",
  "Delivered",
];

const OrderTraker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel className="" sx={{ color: "#b22830", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTraker;