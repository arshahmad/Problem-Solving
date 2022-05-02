/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let p = '';
  let q = '';
    for(i=0; i<s.length; i++) {
      if(s[i] === '#') {
        p = p.slice(0, -1)
      } else {
        p = p.concat(s[i]);
      }
    }
  for(j=0; j<t.length; j++) {
      if(t[j] === '#') {
        q = q.slice(0, -1)
      } else {
        q = q.concat(t[j]);
      }
    }
  return p === q;
};