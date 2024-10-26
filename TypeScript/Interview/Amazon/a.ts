function getMaxAlternatingMusic(music: string, k: number): number {
    // Write your code here
    function toggleChar(c: string) {
        return c == '0' ? '1' : '0'
    }
    function maxLen(start: string) {
        let l = 0
        let mismatched = 0
        let res = 0
        let expected = start
        for (let r = 0; r < music.length; ++r) {
            if (music[r] != expected) {
                ++mismatched
            }
            expected = toggleChar(expected)
            while (mismatched > k) {
                if (music[l] != start) {
                    --mismatched
                }
                ++l

            }
            res = Math.max(res, r - l + 1)
        }
        return res
    }
    return Math.max(maxLen('0'), maxLen('1'))
}