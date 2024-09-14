function numIslands(grid: string[][]): number {
    let res = 0
    let n = grid.length
    let m = grid[0].length
    function dfs(i: number, j: number) {
        if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] == "0") {
            return
        }
        grid[i][j] = "0"
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == "1") {
                res++
                dfs(i, j)
            }
        }
    }
    return res
};