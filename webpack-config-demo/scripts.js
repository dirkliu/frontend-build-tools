var scripts = {
    "aliases" : {
        "react/lib": "/node_modules/react/lib",
        // "react": "/node_modules/react/dist/react.min.js",
        // "redux": "/node_modules/redux/dist/redux.min.js",
        // "react-dom": "/node_modules/react-dom/dist/react-dom.min.js",
        "react-router": "/node_modules/react-router/umd/ReactRouter.min.js",
        "history/lib": "/node_modules/history/umd/history.min.js",
        "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap.min.js",

    },
    "chunks": {
        "vendor": [
            'react',
            'react-dom',
            'react-router'
        ]

    },
    noParse: [
        "jquery"
    ]
};

module.exports = scripts;


