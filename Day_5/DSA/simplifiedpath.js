/*You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.
*/
var simplifyPath = function(path) {
    const stack = [];
  const parts = path.split('/');

  for (let part of parts) {
    if (part === '' || part === '.') {
      
      continue;
    } else if (part === '..') {
     
      stack.pop();
    } else {

      stack.push(part);
    }
  }

  return '/' + stack.join('/');
};