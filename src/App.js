import React from 'react';
import Particles from 'react-particles-js';
import BadlionLanding from './BadlionLanding';

const App = () => {
  return (
    <div>
      <Particles 
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            }
          }
        }}
      />
      <BadlionLanding />
    </div>
  );
};

export default App;