/**
 * Algorithm which fills an array (pre-defined length) with numbers
 * Version for backend (Node, Deno)
 */
function fillArray_TS(max?: number) {
  let arr = [];
  let maxNum = 1000000; // by default 1 million numbers in array

  if (max) {
    console.log("Parameter provided, assuming integer: " + max);
    maxNum = max;
  } else {
    console.log("No parameter provided, using default " + maxNum);
  }

  arr = new Array(maxNum); // array in JS will still be dynamic, .push() possible

  console.time("grow");

  for (let i = 0; i < maxNum; i++) {
    arr[i] = i;
  }

  console.timeEnd("grow");
}

if (Deno.args.length) { // for Node change it to: process.argv.length
  fillArray_TS(parseInt(Deno.args[0])); // for Node change it to: process.argv[0]
} else {
  fillArray_TS();
}

/*
Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

Deno { deno: "1.5.1", v8: "8.7.220.3", typescript: "4.0.3" }
4ms
4ms
5ms
= AVERAGE: 4.3ms (speed in NodeJS is equivalent)

*/
