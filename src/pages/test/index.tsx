<<<<<<< HEAD
import {Button} from "antd"
const Test = () => {
  return (
    <>
      <h1>Test</h1>
      <Button type="primary">Primary Button</Button>
=======
import { Button } from "antd";
import { Link, history } from "umi";
const Test = () => {
  return (
    <>
      <h1>
        <Link to={"/"}>Test</Link>
      </h1>
      <Button onClick={() => history.push("/")} type="primary">
        Primary Button
      </Button>
>>>>>>> f226c12 (test)
    </>
  );
};

export default Test;
