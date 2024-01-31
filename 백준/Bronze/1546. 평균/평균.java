import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int N = in.nextInt();
    int[] arr = new int[N];
    int sum = 0;
    int max = 0;
    double avg = 0.0;

    for(int i = 0; i < arr.length; i++) { //과목의 개수만큼 점수를 받아서 배열에 저장한다.
      arr[i] = in.nextInt();
      if(arr[i] > max) { //최대값 찾기
        max = arr[i];
      }
      sum += arr[i];
    }
    in.close();

    //점수 위조
    avg =  100.0 * sum / max  / N;
    System.out.println(avg);
  }
}