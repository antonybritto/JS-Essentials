let global = {};

const namespace = (ns_string, parent = global) => {
   var parts = ns_string.split('.'), i;
   // strip redundant leading global
   if(window[parts[0]] === parent) {
       parts = parts.slice(1);
   }
   for(i = 0; i < parts.length; i += 1) {
       // create a property if doesn't exist
       if(typeof parent[parts[i]] === "undefined") {
           parent[parts[i]] = {};
       }
       parent = parent[parts[i]];
   }
   return parent;
};

export { global, namespace };