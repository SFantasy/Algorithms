package sort;

/**
 * Sort (main function)
 *
 * @author fantasy
 */
public class Sort {
    // Test array

    private static int[] array = {3, 2, 10, 5, 1, 9, 4, 3};

    public static void main(String[] args) {

        System.out.println("The original array is: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }

        System.out.println();
        System.out.println("The array after sorted is: ");
        //SelectionSort.selectionSort(array);
        //BubbleSort.bubbleSort(array);
        //Sort.bubbleSort();
        QuickSort.quickSort(array);
        //quickSort();
        //HeapSort.heapSort(array);
        //array = MergeSort.mergeSort(array);

        for (int j = 0; j < array.length; j++) {
            System.out.print(array[j] + " ");
        }

        System.out.println();
    }
    /*
     *   Quick Sort
     */

    public static void quickSort() {
        qsort(0, array.length - 1);
    }

    public static void qsort(int p, int r) {
        if (p < r) {
            int q = partition(p, r);
            qsort(p, q - 1);
            qsort(q + 1, r);
        }
    }

    public static int partition(int p, int r) {
        int i = p,
                j = r + 1;

        int x = array[p];

        while (true) {
            while (array[++i] < x) {
                // empty
            }
            while (array[--j] > x) {
                // empty
            }
            if (i >= j) {
                break;
            }
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        array[p] = array[j];
        array[j] = (int) x;
        return j;
    }
}
