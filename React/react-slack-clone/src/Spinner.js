import { Dimmer, Loader } from 'semantic-ui-react';

import React from 'react';

const Spinner = () => (
  <Dimmer active>
    <Loader size="huge" content={'Preparing Chat...bitches~ '} />
  </Dimmer>
);
export default Spinner;
