
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} - anything(s) found
 */
export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}