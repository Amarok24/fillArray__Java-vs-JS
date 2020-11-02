/**
 * Algorithm which fills an fixed length array with integers
 * Version for backend (Node, Deno)
 */
function fillArrayInt32(max?: number) {
  let arr: Int32Array;
  let maxNum = 1000000; // by default 1 million numbers in array

  if (max) {
    console.log("Parameter provided, assuming integer: " + max);
    maxNum = max;
  } else {
    console.log("No parameter provided, using default " + maxNum);
  }

  arr = new Int32Array(maxNum); // fixed length array

  console.time("grow");

  for (let i = 0; i < maxNum; i++) {
    arr[i] = i;
  }

  console.timeEnd("grow");
}

if (Deno.args.length) { // for Node change it to: process.argv.length
  fillArrayInt32(parseInt(Deno.args[0])); // for Node change it to: process.argv[0]
} else {
  fillArrayInt32();
}

/*
Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

Deno { deno: "1.5.1", v8: "8.7.220.3", typescript: "4.0.3" }
5ms
6ms
6ms
= AVERAGE: 5.7ms (speed in NodeJS is equivalent)

*/
