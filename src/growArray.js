/**
 * Algorithm which pushes numbers to a dynamic (growing) array
 */
function growArray(max = null) {
  let arr = [];
  let maxNum = 1000000; // by default 1 million numbers in array

  if (max !== null) {
    console.log("Parameter provided, assuming integer: " + max);
    maxNum = max;
  } else {
    console.log("No parameter provided, using default " + maxNum);
  }

  console.time("grow");

  for (i = 0; i < maxNum; i++) {
    arr.push(i);
  }

  console.timeEnd("grow");
}


/*
Intel i7 2.9 GHz, Windows 10 64bit

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

Brave browser (Version 1.16.68 Chromium: 86.0.4240.111)
20.570068359375 ms
21.253173828125 ms
19.4140625 ms

= AVERAGE: 20.4ms

Firefox (Developer Edition 83.0b6)
328ms
330ms
332ms

= AVERAGE: 330.0ms

*/
