import React, { useState } from "react";

import '../scss/App.scss';

import { Helmet } from 'react-helmet';

import Header from './Header';
import Buttons from './Buttons';
import Body from './Body';

const TITLE = 'React Colour Changer';

function App() {
  const [textColour, setColourValue] = useState("text-gray-700");

  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="px-6">
        <div className="container p-12 my-12 mx-auto bg-gray-300 shadow-xl rounded-xl">
          <Header />
          <Buttons setColourValue={setColourValue}/>
          <Body textColour={textColour}/>
          <div className="pt-10 text-xs w-full lg:w-1/2 lg:mx-auto">Visit <a href="https://www.andrewbeeken.co.uk" rel="noreferrer" target="_blank">andrewbeeken.co.uk</a></div>
        </div>
      </div>
    </>
  );
}

export default App;