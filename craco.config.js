const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#ff8000', // primary color for all components
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};