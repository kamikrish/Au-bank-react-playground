import React from 'react';
import CompanyChangeFC from './CompanyChangeFC';
import CompanyComponent from './CompanyComponent';
import CounterComponent from './CounterComponent';
import { HelloComponent } from './HelloComponent';
import { HelloFunctionalComponent } from './HelloFunctionalComponent';
import { NameComponent } from './NameComponent';
import { NameFunctionalComponent } from './NameFunctionalComponent';
import TickerComponent from './TickerComponent';

export default function App() {
  return (
    <div>
        <CounterComponent/>
        <hr/>
        <CompanyChangeFC/>
        <hr/>
        <TickerComponent/>
        <hr/>
      <CompanyComponent/>
      <hr/>
      <HelloComponent/>
      <hr/>
      <HelloFunctionalComponent/>
      <hr/>
      <NameComponent name="Krishan" message="jsnbfyeqVH"/>
      <hr/>
      <NameComponent name="AU Bank" />
      <hr/>
      <NameFunctionalComponent name="cbvGIHUWQKE" message="jsnbfyeqVH"/>
      <hr/>
    </div>
  );
}

// export default App;
// export default function
