// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum = 0;
  
    for (let x = 0; x < grid.length; x++) {
        let row = grid[x];
        
        for (let y = 0; y < row.length; y++) {
            let unit = row[y];
          
            // 为陆地，计算贡献的周长
            if (unit) {
                let left = grid[x - 1] ? grid[x - 1][y] : 0;
                let right = grid[x + 1] ? grid[x + 1][y] : 0;
                let top = grid[x] ? grid[x][y - 1] : 0;
                let bottom = grid[x] ? grid[x][y + 1] : 0;
              
                if (!left) sum++;
                if (!right) sum++;
                if (!top) sum++;
                if (!bottom) sum++;
            }
        }
    }
    
    return sum;
};
