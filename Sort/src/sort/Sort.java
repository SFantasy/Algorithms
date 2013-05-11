package sort;

/**
 *
 * @author fantasy
 */
public class Sort {
    // Test array
    private static int[] array = {3, 2, 10, 5, 1, 9, 4, 3};

    public static void main(String[] args) {
        
//        int[] newArray = new int[array.length];
        
        System.out.println("The original array is: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }

        System.out.println();
        System.out.println("The array after sorted is: ");
        //Sort.selectionSort();
        //Sort.bubbleSort();
        //Sort.quickSort();
        Sort.heapSort();
        //System.arraycopy(Sort.mergeSort(array), 0, newArray, 0, array.length);

        for (int j = 0; j < array.length; j++) {
            System.out.print(array[j] + " ");
        }
        // Output scope ofr Merge sort
//        for(int k = 0; k < newArray.length; k++) {
//            System.out.print(newArray[k] + " ");
//        }
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
        array[j] = (int)x;
        return j;
    }
    /*
     *   Heap Sort 
     *   http://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F#java.E8.AF.AD.E8.A8.80
     */
    public static void heapSort() {
        buildMaxHeapify(array);
        heap(array);
    }
    
    private static void buildMaxHeapify(int[] data){
        int startIndex = getParentIndex(data.length - 1);
        
        for (int i = startIndex; i >= 0; i--) {
                maxHeapify(data, data.length, i);
        }
    }
    
    private static void maxHeapify(int[] data, int heapSize, int index){
        int left = getLeftChildIndex(index);
        int right = getRightChildIndex(index);

        int largest = index;
        if (left < heapSize && data[index] < data[left]) {
                largest = left;
        }
        if (right < heapSize && data[largest] < data[right]) {
                largest = right;
        }

        if (largest != index) {
                int temp = data[index];
                data[index] = data[largest];
                data[largest] = temp;
                maxHeapify(data, heapSize, largest);
        }
    }
    
    private static void heap(int[] data) {
        for(int i = data.length - 1; i > 0; i--) {
            int temp = data[0];
            data[0] = data[i];
            data[i] = temp;
            maxHeapify(data, i, 0);
        }
    }
    
    private static int getParentIndex(int current) {
        return (current - 1) >> 1;
    }
    
    private static int getLeftChildIndex(int current) {
        return (current << 1) + 1;
    }
    
    private static int getRightChildIndex(int current) {
        return (current << 1) + 2;
    }
    /*
     *   Merge Sort
     */
    public static int[] mergeSort(int[] arr) {
        if(arr.length == 1) {
            return arr;
        }
        int mid = arr.length / 2;
        int[] left = new int[mid];
        int[] right = new int[arr.length - mid];
        System.arraycopy(arr, 0, left, 0, left.length);
        System.arraycopy(arr, mid, right, 0, right.length);
        left = mergeSort(left);
        right = mergeSort(right);
        return merge(left, right);
    }
    
    public static int[] merge(int[] l, int[] r) {
        int[] result = new int[l.length + r.length];
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
