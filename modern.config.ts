import {appTools, defineConfig} from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    source: {
        globalVars: {
            'APP_NAME': 'KanapesIDE',
        }
    },
    runtime: {
        router: true
    },
    plugins: [
        appTools({
            bundler: 'rspack' // Set to 'webpack' to enable webpack
        })
    ],
    tools: {
        less: {
            lessOptions: {
                javascriptEnabled: true
            },
            sourceMap: false
        }
    },
    output: {
        disableCssModuleExtension: true,
    }
});
