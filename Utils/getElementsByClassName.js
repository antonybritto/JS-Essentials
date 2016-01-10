const getElementsByClassName = (element, className) => {
  let found = [];
  let regex = new RegExp('(^| )' + className + '($| )');
  let elements = element.getElementsByTagName('*');

  elements.forEach((index, ele) => {
    if (regex.test(ele.className)) {
      found.push(ele);
    }
  });

  return found;
};

export default getElementsByClassName;