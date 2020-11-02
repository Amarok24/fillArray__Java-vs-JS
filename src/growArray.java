import java.util.ArrayList;

/**
 * Algorithm which pushes integers to a dynamic (growing) array
 */
class growArray {
  public static void main(String[] args) {
    long startTime;
    int maxNum = 1000000; // by default 1 million integers in array
    ArrayList<Integer> intArray = new ArrayList<Integer>();

    if (args.length != 0) {
      System.out.println("Parameter (String) provided, parsing to integer: " + args[0]);
      maxNum = Integer.parseInt( args[0] );
    } else {
      System.out.println("No parameter provided, using default " + maxNum);
    }

    startTime = System.nanoTime();

    for (int i = 0; i < maxNum; i++) {
      intArray.add(i);
    }

    System.out.println(
      "Time " + (float) (System.nanoTime() - startTime) / 1000000000 + "s"
    );
  }
}

/*
Intel i7 2.9 GHz, Windows 10 64bit, Java OpenJDK 15.0.1

3 test runs with parameters: 1000002, 1000003, 1000004 (to avoid any runtime caching)

0.0291516s
0.0306681s
0.0293959s
= AVERAGE: 29.74ms

*/
