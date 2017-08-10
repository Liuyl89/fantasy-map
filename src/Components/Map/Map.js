import React from 'react'
import PropTypes from 'prop-types'

class Map extends React.Component {
    static propTypes = {}
    static defaultProps = {}

    componentDidMount() {
        window.require(['esri/Map', 'esri/views/MapView'], (EsriMap, MapView) => {
            this.map = new EsriMap({
                basemap: 'streets',
            })

            this.view = new MapView({
                container: this.dom,
                map: this.map,
            })
        })
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={(dom) => {
                this.dom = dom
            }}/>
        )
    }
}
export default Map
