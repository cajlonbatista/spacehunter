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
                            '@link-color': '#515ec0', // link color
                            '@success-color': '#2B2A44', // success state color
                            '@warning-color': '#faad14', // warning state color
                            '@error-color': '#f92f2f', // error state color
                            '@text-color': '#4DDAD8', // major text color
                            '@text-color - secondary': '#ffff', // secondary text color
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};