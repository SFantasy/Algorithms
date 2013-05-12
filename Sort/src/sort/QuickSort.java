package sort;

/**
 * Quick Sort (快速排序)
 * 
 * @author fantasy
 */
public class QuickSort {
    
    public static void quickSort(int[] data) {
        System.arraycopy(data, 0, data, 0, data.length);
        qsort(0, data.length - 1, data);
    }

    private static void qsort(int p, int r, int[] data) {
        if (p < r) {
            int q = partition(p, r, data);
            qsort(p, q - 1, data);
            qsort(q + 1, r, data);
        }
    }

    private static int partition(int p, int r, int[] data) {
        int i = p,
                j = r + 1;

        int x = data[p];
        
        while (true) {
            while (data[++i] < x) {
                // empty
            }
            while (data[--j] > x) {
                // empty
            }
            if (i >= j) {
                break;
            }
            int temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
        data[p] = data[j];
        data[j] = x;
        return j;
    }
}
