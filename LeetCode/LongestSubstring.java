package leetcode;

/**
 *
 * @author fantasy
 */
public class Solution {
    public int lengthOfLongestSubstring(String s) {        
        ArrayList<Character> origin = new ArrayList<Character>();
        for(int i = 0; i < s.length(); i++) {
            origin.add(s.charAt(i));
        }
        
        ArrayList<Character> temp = new ArrayList<Character>();
        ArrayList<Character> longest = new ArrayList<Character>();
        for(int j = 0; j < origin.size(); j++) {
            if(!temp.contains(origin.get(j))) {
                temp.add(origin.get(j));
                if(temp.size() > longest.size()) {
                    longest = new ArrayList<Character>(temp);
                }
            } else {
                temp.clear();
                temp.add(origin.get(j));
            }
        }
        
        return longest.size();
    }
}