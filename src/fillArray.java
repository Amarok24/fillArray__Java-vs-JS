/**
 * Algorithm which fills an array (fixed length) with numbers
 */
class fillArray {
  public static void main(String[] args) {
    long startTime;
    int[] intArray;
    int maxNum = 1000000; // by default 1 million integers in array

    if (args.length != 0) {
      System.out.println("Parameter (String) provided, parsing to integer: " + args[0]);
      maxNum = Integer.parseInt( args[0] );
    } else {
      System.out.println("No parameter provided, using default " + maxNum);
    }

    intArray = new int[maxNum];
    startTime = System.nanoTime();

    for (int i = 0; i < maxNum; i++) {
      intArray[i] = i;
    }

    System.out.println(
      "Time " + (float) (System.nanoTime() - startTime) / 1000000000 + "s"
    );
  }
}

/*
Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

0.0051042s
0.0049314s
0.0058498s

= AVERAGE: 5.3ms

*/
