export default function responsiveOrderValidator(props) {
    if (!props['no-wrap']) {
        return;
    }

    if (props['no-wrap'] && props['wrap']) {
        return new Error('no-wrap property shouldn`t be used together with wrap!')
    }

    if (props['no-wrap'] && props['wrap-reverse']) {
        return new Error('no-wrap property shouldn`t be used together with wrap-reverse!')
    }

    if (typeof props['no-wrap'] !== 'boolean') {
        console.log(typeof props['no-wrap']);
        return new Error('no-wrap should be boolean!');
    }
}
