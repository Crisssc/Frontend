import { Progress } from 'semantic-ui-react';
import React from 'react';

const ProgressBar = ({ uploadState, percentUploaded }) =>
  uploadState === 'uploading' && (
    <Progress
      className="progress__bar"
      percent={percentUploaded}
      progress
      indicating
      size="medium"
      inverted
    />
  );

export default ProgressBar;
