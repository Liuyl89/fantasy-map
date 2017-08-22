import env from '../env'

if (window.require) {
    window.require(['esri/kernel'], (esriNS) => {
        env.platform.type = 'arcgis'
        env.platform.version = esriNS.version
    })
}
function isArcgis4() {
    return env.platform.type === 'arcgis'
        && env.platform.version[0]
        && env.platform.version[0] === '4'
}

export {
    isArcgis4,
}
