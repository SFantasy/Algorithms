package sort;

/**
 * Selection Sort (选择排序)
 * 
 * @author fantasy
 */
public class SelectionSort {

    public static void selectionSort(int[] data) {

        for (int i = 0; i < data.length; i++) {
            int largest = i;
            int temp;
            for (int j = i + 1; j < data.length; j++) {
                if (data[j] > data[largest]) {
                    largest = j;
                }
            }
            temp = data[i];
            data[i] = data[largest];
            data[largest] = temp;
        }
    }
}
