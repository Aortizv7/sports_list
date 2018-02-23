// THESE IMPORTATIONS ARE TO TEST THE APP COMPONENT //
import React from 'react';
import { configure } from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme'; 
configure({ adapter: new Adapter() });

import renderer from 'react-test-renderer';
import App from './App.js';


// THIS CONSTANT IS TO TEST THE DATA //
// const functions = require("./functions.js");



describe (`Testing the App Component`,()=>{
  test()
})




// DATA TESTING // S
// describe(`Sports information`, () => {
//   test(`expect data format to be an array`, () => {
//     let result = functions.sportsFormat();
//     expect(Array.isArray(result));
//   });
//   test(`Length of data array should be 8`, () => {
//     let result = functions.confirmLength();
//     expect(result).toEqual(8);
//   });
// });


