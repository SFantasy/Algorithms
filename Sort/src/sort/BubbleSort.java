package sort;

/**
 * Bubble sort (冒泡排序)
 * 
 * @author fantasy
 */
public class BubbleSort {

    public static void bubbleSort(int[] data) {

        for (int i = 0; i < data.length; i++) {
            for (int j = i + 1; j < data.length; j++) {
                if (data[i] < data[j]) {
                    int temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }
        }
    }
}
