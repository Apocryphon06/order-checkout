import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Account Details',
  'Shipping',
  'Payment',
];

export default function CustomStepper({activeStep}) {
  return (
    <Box sx={{ width: '100%',padding:'15px' }}>
      <Stepper activeStep={activeStep} >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}