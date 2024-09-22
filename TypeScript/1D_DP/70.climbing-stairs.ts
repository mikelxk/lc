function climbStairs(n: number): number {
    // ways[i] = ways[i-2] + ways[i-1]
    let ways = [1,2]
    for(let i =2;i<n;++i){
        ways[i] = ways[i-2] + ways[i-1]
    }
    return ways[n-1]
};