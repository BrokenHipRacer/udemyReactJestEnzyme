import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} - anything(s) found
 */
export const findByAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

/**
 * Performs a check of props against a component
 * @param {Object} component - component to test it's props.
 * @param {Object} conformingProps - props to test for.
 */
export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}