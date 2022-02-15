import logo from "./logo1.jpg";
import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  let totalFeet = watch("totalFeet");
  let cornerPost = watch("cornerPost");
  let endPost = watch("endPost");
  let gatePost = watch("gatePost");
  let wFF = 0;
  let wTW = 0;
  let wFP = 0;
  let wACG = 0;
  // console.log(watch("totalFeet")); // watch input value by passing the name of it
  if (totalFeet >= 49 && totalFeet <= 72) {
    wFF = 3;
    wTW = 1;
    wFP = 3;
    wACG = 1;
  } else if (totalFeet >= 73 && totalFeet <= 96) {
    wFF = 4;
    wTW = 1;
    wFP = 4;
    wACG = 1;
  } else if (totalFeet >= 97 && totalFeet <= 120) {
    wFF = 5;
    wTW = 1;
    wFP = 5;
    wACG = 1;
  } else if (totalFeet >= 121 && totalFeet <= 144) {
    wFF = 6;
    wTW = 1;
    wFP = 6;
    wACG = 1;
  } else if (totalFeet >= 145 && totalFeet <= 168) {
    wFF = 7;
    wTW = 1;
    wFP = 7;
    wACG = 1;
  } else if (totalFeet >= 169 && totalFeet <= 192) {
    wFF = 8;
    wTW = 1;
    wFP = 8;
    wACG = 1;
  } else if (totalFeet >= 193 && totalFeet <= 216) {
    wFF = 9;
    wTW = 1;
    wFP = 9;
    wACG = 1;
  }

  let wPOK = Number(2 * cornerPost) + Number(endPost) + Number(gatePost);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>INFINITY EURO FENCING CALCULATOR</h1>
      <br></br>
      <h2>
        Post Hardware Kit: Determine the number of Post Hardware Kits required.
      </h2>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <h5>Enter Total Feet: </h5>
        <input {...register("totalFeet", { required: true })} /> <br></br>
        {/* register your input into the hook by invoking the "register" function */}
        <h5>Enter # of Corner Posts needed: </h5>
        <input {...register("cornerPost", { required: true })} /> <br></br>
        {/* include validation with required or other standard HTML validation rules */}
        <h5>Enter # of End Posts needed:</h5>
        <input {...register("endPost", { required: true })} /> <br></br>
        <h5>Enter # of Gate Posts needed:</h5>
        <input {...register("gatePost", { required: true })} />
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" /> */}
      </FormControl>
      <h3>How Many Cartons Will You Need?</h3>
      <ul>
        <ul>Fence Framework: {wFF}</ul>
        <ul>Post Hardware Kit: {wPOK}</ul>
        <ul>Tension Wire: {wTW}</ul>
        <ul>Fence Panels: {wFP}</ul>
        <ul>Auto Close Gate:{wACG}</ul>
      </ul>
    </div>
  );
}
