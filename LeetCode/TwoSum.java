package leetcode;

/**
 *
 * @author fantasy
 */
public class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // 存储下标+1
        int [] index = new int[2];
        // 存储两者之和
        int sum;
        
        for(int i = 0; i < numbers.length + 1; i++) {
            for(int j = i + 1; j < numbers.length; j++) {
                sum = numbers[i] + numbers[j];
                if(sum == target) {
                    index[0] = i + 1;
                    index[1] = j + 1;
                    break;
                }
            }
        }
        
        return index;
    }
}
