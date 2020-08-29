
// How to run useEffect() only once
// in React.js - (React Hooks)
// Mamun Abdullah, @theTradeCoder
// @tradecoder

import {useEffect} from "react";

// just add an empty array
// after the callback function
// separated by a comma 
// useEffect(callback, []);
useEffect(()=>{}, []);



// Dynamically generated html id attribute
// since html id attribute can not be started
// with number, it is very common to get trouble 
// while generating id automatically from 
// a data source, it will fail if the source
// has the data starting with a number
// To solve this issue we can add a common letter
// before the source data 
