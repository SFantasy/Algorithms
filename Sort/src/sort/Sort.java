package sort;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author fantasy
 */
public class Sort {

    public static void main(String[] args) {
        int[] array = {3, 2, 10, 5, 1, 9, 4, 3};
        int choose = 0;
        int[] result;
        Sort test = new Sort();
        System.out.println("The original array is: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
        System.out.println("The array after sorted is: ");
        //result = test.selectionSort(array);
        result = test.bubbleSort(array);
        for (int j = 0; j < result.length; j++) {
            System.out.print(result[j] + " ");
        }
        System.out.println();
    }

    public int[] selectionSort(int[] array) {
        int[] newArray = array;
        for (int i = 0; i < newArray.length; i++) {
            int largest = i;
            int temp;
            for (int j = i + 1; j < newArray.length; j++) {
                if (newArray[j] > newArray[largest]) {
                    largest = j;
                }
            }
            temp = newArray[i];
            newArray[i] = newArray[largest];
            newArray[largest] = temp;
        }
        return newArray;
    }

    public int[] bubbleSort(int[] array) {
        int[] newArray = array;
        for (int i = 0; i < newArray.length; i++) {
            for (int j = i + 1; j < newArray.length; j++) {
                if (newArray[i] < newArray[j]) {
                    int temp = newArray[i];
                    newArray[i] = newArray[j];
                    newArray[j] = temp;
                }
            }
        }
        return array;
    }
}
