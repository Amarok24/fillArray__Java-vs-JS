# fillArray__Java-vs-JS
Speed comparison of Java vs. JavaScript (TypeScript, Deno, NodeJS), filling an array with 1 million numbers.

### Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1
### 3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

## growArray.java
0.0291516s
0.0306681s
0.0293959s
= AVERAGE: 29.74ms

## growList.java
0.1172112
0.1074784
0.1174478
= AVERAGE: 114.0ms

## fillArray.java
0.0051042s
0.0049314s
0.0058498s
= AVERAGE: 5.3ms

## growArray.js
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

## fillArray.js
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

## fillArray_TS.ts
Deno { deno: "1.5.1", v8: "8.7.220.3", typescript: "4.0.3" }
4ms
4ms
5ms
= AVERAGE: 4.3ms (speed in NodeJS is equivalent)
