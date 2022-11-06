#include "../../std.hpp"
class Solution {
public:
    int furthestBuilding(vector<int> &heights, int bricks, int ladders)
    {
        priority_queue<int> pq;
        int i = 0;
        for (; i < heights.size() - 1; ++i) {
            int diff = heights[i + 1] - heights[i];
            if (diff <= 0)
                continue;

            pq.push(diff);
            bricks -= diff;
            if (bricks < 0) {
                bricks += pq.top();
                pq.pop();
                --ladders;
            }
            if (ladders < 0)
                break;
        }
        return i;
    }
};