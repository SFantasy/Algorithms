package sort;

/**
 *
 * @author fantasy
 */
public class Sort {
    // Test array
    private static Integer[] array = {3, 2, 10, 5, 1, 9, 4, 3};

    public static void main(String[] args) {
        
        Integer[] newArray = new Integer[array.length];
        
        System.out.println("The original array is: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }

        System.out.println();
        System.out.println("The array after sorted is: ");
        //Sort.selectionSort();
        //Sort.bubbleSort();
        //Sort.quickSort();
        //Sort.heapSort();
        System.arraycopy(Sort.mergeSort(array), 0, newArray, 0, array.length);

//        for (int j = 0; j < array.length; j++) {
//            System.out.print(array[j] + " ");
//        }
        // Output scope ofr Merge sort
        for(int k = 0; k < newArray.length; k++) {
            System.out.print(newArray[k] + " ");
        }
        System.out.println();
    }
    /*
     *   Selection Sort
     */
    public static void selectionSort() {

        for (int i = 0; i < array.length; i++) {
            int largest = i;
            int temp;
            for (int j = i + 1; j < array.length; j++) {
                if (array[j] > array[largest]) {
                    largest = j;
                }
            }
            temp = array[i];
            array[i] = array[largest];
            array[largest] = temp;
        }
    }
    /*
     *   Bubble Sort
     */
    public static void bubbleSort() {

        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
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

        Comparable x = array[p];

        while (true) {
            while (array[++i].compareTo((Integer) x) < 0) {
                // empty
            }
            while (array[--j].compareTo((Integer) x) > 0) {
                // empty
            }
            if (i >= j) {
                break;
            }
            Integer temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        array[p] = array[j];
        array[j] = (Integer)x;
        return j;
    }
    /*
     *   Heap Sort
     */
    public static void heapSort() {
    }
    /*
     *   Merge Sort
     */
    public static Integer[] mergeSort(Integer[] arr) {
        if(arr.length == 1) {
            return arr;
        }
        int mid = arr.length / 2;
        Integer[] left = new Integer[mid];
        Integer[] right = new Integer[arr.length - mid];
        System.arraycopy(arr, 0, left, 0, left.length);
        System.arraycopy(arr, mid, right, 0, right.length);
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
    
    public static Integer[] merge(Integer[] l, Integer[] r) {
        Integer[] result = new Integer[l.length + r.length];
        int i = 0,
                j = 0,
                k = 0;
        while(true) {
            if(l[i] < r[j]) {
                result[k] = l[i];
                if(++i > l.length - 1) {
                    break;
                }
            } else {
                result[k] = r[j];
                if(++j > r.length - 1) {
                    break;
                }
            }
            k++;
        }
        for(;i < l.length; i++) {
            result[++k] = l[i];
        }
        for(;j < r.length; j++) {
            result[++k] = r[j];
        }
        return result;
    }
    
}
