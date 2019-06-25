const objectPath = (root) => {
  const paths = [];
  const nodes = [{
    obj: root,
    path: [],
  }];
  while(nodes.length) {
    let node = nodes.pop();
    Object.keys(node.obj).forEach((key) => {
        let path = node.path.concat(key);
        paths.push(path);
        if (typeof node.obj[key] === 'object') {
          nodes.unshift({
            obj: node.obj[key],
            path: path,
          });
        }
    });
  }
  return paths;
};
