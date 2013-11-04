package leetcode;

/**
 *
 * @author fantasy
 */
public class Solution {
    public int lengthOfLongestSubstring(String s) {        
        Hashtable<Character, Integer> t = new Hashtable<Character, Integer>();
        int longest = 0;
        for(int i = 0; i < s.length(); i++) {
            for(int j = i; j < s.length(); j++) {
                if(t.containsKey(s.charAt(j))) {
                    longest = t.size() > longest ? t.size() : longest;
                    t.clear();
                    break;
                } else {
                    t.put(s.charAt(j), 1);
                    longest = t.size() > longest ? t.size() : longest;
                }
            }
        }
        
        return longest;
    }
}
