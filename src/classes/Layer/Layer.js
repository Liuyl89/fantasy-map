import PropTypes from 'prop-types'

class Layer {
    static propTypes = {
        baseLayers: PropTypes.array,
        title: PropTypes.string,
    }
    static defaultProps = {
        baseLayers: [],
        titls: '',
    }

    constructor(props) {
        this.props = _.assignIn({}, this.defaultProps, props)

        PropTypes.checkPropTypes(this.propTypes, this.props, 'prop', 'Layer')
    }

    getPlatformObject() {

    }
}
export default Layer
