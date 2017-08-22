import React from 'react'
import PropTypes from 'prop-types'
import * as platformDetect from '../../lib/platformDetect'
import MapNoMatch from './MapNoMatch'
import MapArcgis4 from './MapArcgis4'

function getMatch() {
    if (platformDetect.isArcgis4()) {
        return MapArcgis4
    }
    return MapNoMatch
}

class Map extends React.Component {
    static propTypes = {
        children: PropTypes.array,
    }
    static defaultProps = {}

    constructor() {
        super()
        this.mapClass = getMatch()
    }

    render() {
        const MapClass = this.mapClass
        return (<MapClass {...this.props}/>)
    }
}
export default Map
