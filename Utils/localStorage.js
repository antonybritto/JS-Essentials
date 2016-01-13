export default {
    setObject(key = null, value = null) {
        if (!window.localStorage || !key || !value) {return;}
        localStorage.setItem(key, JSON.stringify(value));
    },
    getObject(key = null) {
        if (!window.localStorage) {return;}
        var data = localStorage.getItem(key);
        if(data) {
           return JSON.parse(data);
        }
    },
    removeObject(key = null){
        if (!window.localStorage) {return;}
        localStorage.removeItem(key);
    },
    clear() {
        if (!window.localStorage) {return;}
        localStorage.clear();
    }
};;