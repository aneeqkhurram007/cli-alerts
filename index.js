#!/usr/bin/env node
import chalk from "chalk";
import symbols from "log-symbols";
import unhandled from "cli-handle-unhandled";
unhandled();
console.log("Main File");
Promise.reject(new Error("Unhandeled Rejection"));
const testFunction = (options) => {
  const defaultOptions = {
    type: "Success",
    message: "No message found",
  };
  console.log({ ...defaultOptions, ...options });
};
export default testFunction;
