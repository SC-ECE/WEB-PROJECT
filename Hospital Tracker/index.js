import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Marksheetentry from "./Hospital Search";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "nfi";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("marksheet");

  collection.insertOne({
    marks: Marksheetentry.getElementById(marks),
    name: Marksheetentry.getElementById(naame),
    roll: Marksheetentry.getElementById(roll),
  });
  console.log("ABC");

  // let response = await collection.find({}).toArray();

  // for (var i = 0; i < response.length; i++) {
  //   let arr = Object.entries(response[i]);
  //   if (arr[1][1] == "gita")
  console.log(arr[1][1]);
  // }
}
export default getData();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
