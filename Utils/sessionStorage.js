export default {
    setObject(key, value) {
        if (!window.sessionStorage || !key || !value) {return;}
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    getObject(key) {
        if (!window.sessionStorage || !key) {return;}
        var data = sessionStorage.getItem(key);
        if(data) {
           return JSON.parse(data);
        }
    },
    removeObject(key) {
        if (!window.sessionStorage || !key) {return;}
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