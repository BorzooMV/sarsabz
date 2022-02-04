import { Stack, Typography } from '@mui/material';
import React from 'react';
import FeatureBox from './FeatureBox';

const FeatureList = () => {
  return (
    <Stack direction="row">
      <FeatureBox>
        <Typography>A</Typography>
      </FeatureBox>
      <FeatureBox>
        <Typography>A</Typography>
      </FeatureBox>
      <FeatureBox>
        <Typography>A</Typography>
      </FeatureBox>
    </Stack>
  );
};

export default FeatureList;
