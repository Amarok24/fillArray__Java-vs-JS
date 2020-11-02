/**
 * Algorithm which fills an array (pre-defined length) with numbers
 */
function fillArray(max = null) {
  let arr;
  let maxNum = 1000000; // by default 1 million numbers in array

  if (max !== null) {
    console.log("Parameter provided, assuming integer: " + max);
    maxNum = max;
  } else {
    console.log("No parameter provided, using default " + maxNum);
  }

  arr = new Array(+maxNum); // array in JS will still be dynamic, .push() possible

  console.time("grow");

  for (i = 0; i < maxNum; i++) {
    arr[i] = i;
  }

  console.timeEnd("grow");
}

/*
Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

Brave browser (Version 1.16.68 Chromium: 86.0.4240.111)
4.76708984375 ms
2.39404296875 ms
2.76123046875 ms

= AVERAGE: 3.3ms

Firefox (Developer Edition 83.0b6)
462ms
463ms
440ms

= AVERAGE: 455ms

*/
