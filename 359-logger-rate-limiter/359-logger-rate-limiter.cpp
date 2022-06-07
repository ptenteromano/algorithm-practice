class Logger {
public:    
    bool shouldPrintMessage(int timestamp, string message) {
        if (timestamp < timetable[message]) 
            return false;
        
        timetable[message] = timestamp + 10;
        return true;
    }
    
private:
    unordered_map<string, int> timetable;
};

/**
 * Your Logger object will be instantiated and called as such:
 * Logger* obj = new Logger();
 * bool param_1 = obj->shouldPrintMessage(timestamp,message);
 */