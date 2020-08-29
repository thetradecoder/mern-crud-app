
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

