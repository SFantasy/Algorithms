package sort;

/**
 * Heap sort (堆排序)
 * 
 * Reference:
 * http://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F#java.E8.AF.AD.E8.A8.80
 * @author fantasy
 */
public class HeapSort {
    
    public static void heapSort(int[] array) {
        buildMaxHeapify(array);
        heap(array);
    }

    private static void buildMaxHeapify(int[] data) {
        int startIndex = getParentIndex(data.length - 1);

        for (int i = startIndex; i >= 0; i--) {
            maxHeapify(data, data.length, i);
        }
    }

    private static void maxHeapify(int[] data, int heapSize, int index) {
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
        for (int i = data.length - 1; i > 0; i--) {
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
}
