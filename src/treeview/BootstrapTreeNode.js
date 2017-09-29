import React from 'react'
import PropTypes from 'prop-types'

class BootstrapTreeNode extends React.Component {
    static propTypes = {
        children: PropTypes.array,
        buttons: PropTypes.array,
        label: PropTypes.string,
        onCheck: PropTypes.function,
    }
    static defaultProps = {
        label: '树节点名',
        buttons: [],
        children: [],
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div></div>
        )
    }
}
export default BootstrapTreeNode
