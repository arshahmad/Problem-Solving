/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const l = sentences.map(s => {
        return s.split(' ').length
    });
    return Math.max.apply(null, l);
};