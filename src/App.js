import logo from "./logo1.jpg";
import "./App.css";
import React from "react";
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import {
  Input,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
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
  let wPOK = 0;
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

  wPOK = Number(2 * cornerPost) + Number(endPost) + Number(gatePost);

  return (
    <Container>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Infinity Euro Fencing Calculator</h1>
        <br></br>
        {/* <h2>
        Post Hardware Kit: Determine the number of Post Hardware Kits required.
      </h2> */}
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <Row>
          <Col>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <InputLabel>Total Length(ft): </InputLabel>
                <Input {...register("totalFeet", { required: true })} />{" "}
                <br></br>
                {/* register your input into the hook by invoking the "register" function */}
              </FormControl>
              <FormControl>
                <InputLabel># Corner Posts: </InputLabel>
                <Input {...register("cornerPost", { required: true })} />{" "}
                <br></br>
                {/* include validation with required or other standard HTML validation rules */}
              </FormControl>
              <FormControl>
                <InputLabel># End Posts:</InputLabel>
                <Input {...register("endPost", { required: true })} /> <br></br>
              </FormControl>
              <FormControl>
                <InputLabel># Gate Posts:</InputLabel>
                <Input {...register("gatePost", { required: true })} />
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" /> */}
              </FormControl>
            </FormControl>
          </Col>
          <Col>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>How Many Cartons Will You Need?</TableHead>
                <TableRow>
                  <TableCell>Fence Framework: {wFF}</TableCell>
                  <TableCell>Post Hardware Kit: {wPOK}</TableCell>
                  <TableCell>Tension Wire: {wTW}</TableCell>
                  <TableCell>Fence Panels: {wFP}</TableCell>
                  <TableCell>Auto Close Gate:{wACG}</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
