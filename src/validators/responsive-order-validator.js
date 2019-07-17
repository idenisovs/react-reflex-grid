const checker = /^(xs|sm|md|lg|xlg)-\d{1,2}$/;

export default function responsiveOrderValidator(props, propName, componentName) {
    const propValue = props[propName];

    if (!propValue) {
        return;
    }

    if (typeof propValue !== 'string') {
        return new Error(`${propName} should be String!`);
    }

    const breakpoints = propValue.split(',').map((bp) => bp.trim());
    const isValid = breakpoints.every(bp => checker.test(bp));

    if (!isValid) {
        const failedValue = breakpoints.find(bp => !checker.test(bp));
        return new Error(`${failedValue} is not valid value for property ${propName} of ${componentName} component!`);
    }
}
