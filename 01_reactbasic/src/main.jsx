import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Dhruv Wadhwani</h1>
    </div>
  );
}

// const reactElement = {
//     type: 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'
//     },
//     children: 'Click me to go to google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>VISIT GOOGLE</a>
)

const anotherUser = 'Chai'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google' ,
  anotherUser
)
//injected by BABEL 
//click me to visit googleChai

createRoot(document.getElementById("root")).render(
  reactElement 
);
