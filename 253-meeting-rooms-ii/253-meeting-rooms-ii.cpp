class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        // Sort by the start time
        sort(intervals.begin(), intervals.end(), [](auto &left, auto &right) {
            return left[0] < right[0];
        });
        
        // Min heap of meeting room end times
        priority_queue <int, vector<int>, greater<int>> end_times;
        int number_of_rooms = 0, temp;
        
        // return intervals;
        for (auto & time_range : intervals) {
            if (end_times.empty() || end_times.top() > time_range[0]) {
                end_times.push(time_range[1]);    
            } else {
                end_times.pop();
                end_times.push(time_range[1]);
            }
            temp = end_times.size();
            number_of_rooms = temp > number_of_rooms ? temp : number_of_rooms;
        }
        
        return number_of_rooms;
    }
};