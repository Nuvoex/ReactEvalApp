import * as GLOBAL from './utils/Globals';
export default {

    qrcodelist: {
        initialRoute: true,
        title: GLOBAL.SCREEN_TITLE.QR_CODE_SCANNER,
        component: require('./scenes/QRcodeList').default,

        children: {
            scanqrcode: {
                title: GLOBAL.SCREEN_TITLE.SCAN_QR_CODE,
                component: require('./scenes/QRcodeScanner').default,
            },
        },
    },

    map: {
        title: GLOBAL.SCREEN_TITLE.MAP,
        component: require('./scenes/MapScreen').default,
    },

    github: {
        title: GLOBAL.SCREEN_TITLE.GITHUB_API,
        component: require('./scenes/GithubApis').default,
    },

    logout: {
        title: GLOBAL.SCREEN_TITLE.LOGOUT,
        component: require('./scenes/GithubApis').default,
    },

};
