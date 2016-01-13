export default {
    setObject(key = null, value = null) {
        if (!window.sessionStorage || !key || !value) {return;}
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getObject(key = null) {
        if (!window.sessionStorage) {return;}
        var data = sessionStorage.getItem(key);
        if(data) {
           return JSON.parse(data);
        }
    },
    removeObject(key = null) {
        if (!window.sessionStorage) {return;}
        sessionStorage.removeItem(key);
    },
    getKey(position) {
        if (!window.sessionStorage) {return -1;}
        sessionStorage.key(position);
    },
    clear() {
        if (!window.sessionStorage) {return;}
        sessionStorage.clear();
    }
};