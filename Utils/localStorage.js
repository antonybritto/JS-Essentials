export default {
    setObject(key, value) {
        if (!window.localStorage || !key || !value) {return;}
        localStorage.setItem(key, JSON.stringify(value));
    },
    getObject(key) {
        if (!window.localStorage || !key) {return;}
        var data = localStorage.getItem(key);
        if(data) {
           return JSON.parse(data);
        }
    },
    removeObject(key){
        if (!window.localStorage || !key) {return;}
        localStorage.removeItem(key);
    },
    clear() {
        if (!window.localStorage) {return;}
        localStorage.clear();
    }
};;