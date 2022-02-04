import React from 'react';
import Credits from './components/Credits';
import Heading from './components/Heading';
import PreviewBox from './components/PreviewBox';

export default function App() {
  return (
    <div id="app">
      <Heading />
      <PreviewBox />
      <Credits />
    </div>
  )
}