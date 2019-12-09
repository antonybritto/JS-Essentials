class Node {
  constructor(key, val, next = null, prev = null) {
    this.prev = prev;
    this.next = next;
    this.value = val;
    this.key = key;
  }
}

class LRU {
  constructor(limit = 10) {
    this.head = null;
    this.tail = null;
    this.cache = {};
    this.size = 0;
    this.limit = limit;
  }
  
  read(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;
      this.remove(key);
      this.write(key, value);
      return value;
    }
  }
  
  write(key, value) {
    this.ensureLimit();
    if (!this.head) {
      this.head = this.tail = new Node(key, value);
    } else {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }
    this.cache[key] = this.head;
    this.size++;
  }
  
  ensureLimit() {
    if(this.size === this.limit){
      this.remove(this.tail.key);
    }
  }
  
  remove(key){
    const node = this.cache[key];
    
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    delete this.cache[key];
    this.size--;
  }
  
  clear() {
    this.head = null;
    this.tail = null;
    this.cache = {};
    this.size = 0;
  }
}
