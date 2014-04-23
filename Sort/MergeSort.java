package sort;

/**
 * Merge sort (归并排序)
 *
 * @author fantasy
 */
public class MergeSort {

    public static int[] mergeSort(int[] arr) {
        if (arr.length == 1) {
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
        while (true) {
            if (l[i] < r[j]) {
                result[k] = l[i];
                if (++i > l.length - 1) {
                    break;
                }
            } else {
                result[k] = r[j];
                if (++j > r.length - 1) {
                    break;
                }
            }
            k++;
        }
        for (; i < l.length; i++) {
            result[++k] = l[i];
        }
        for (; j < r.length; j++) {
            result[++k] = r[j];
        }
        return result;
    }
}
