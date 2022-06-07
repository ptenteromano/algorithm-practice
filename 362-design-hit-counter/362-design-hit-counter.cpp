class HitCounter {
public:
    void hit(int timestamp) {
        this->hit_count.push(timestamp);
    }
    
    int getHits(int timestamp) {
        int diff;
        
        while(!this->hit_count.empty()) {
            diff = timestamp - this->hit_count.front();
            
            if (diff < 300)
                break;
            
            this->hit_count.pop();
        }
        
        return this->hit_count.size();
    }
    
private:
    queue<int> hit_count;
};

/**
 * Your HitCounter object will be instantiated and called as such:
 * HitCounter* obj = new HitCounter();
 * obj->hit(timestamp);
 * int param_2 = obj->getHits(timestamp);
 */