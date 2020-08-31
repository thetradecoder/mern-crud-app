
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


// How to fix the value of dynamically-generated-html-id-attribute 
// with JavaScript // Mamun Abdullah, @theTradeCoder @tradeCoder

// Since the value of html id attribute should not be started
// with a number for css does not work with that, it is very 
// common to get trouble while generating it automatically 
// from a data source. It will fail working where the 
// source data starts with a number for this purpose. 
// To solve this issue we can add a text or letter
// before the source data, like:  id={`mytext${source-data}`}
// and set the target value like this: {`#mytext${source-data}`}
// You must follow your relevant code syntax //