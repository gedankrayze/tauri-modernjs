import {appTools, defineConfig} from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    source: {
        globalVars: {
            'APP_NAME': 'Tauri ModernJS',
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
        },
        rspack: {
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all'
                        }
                    }
                }
            }
        }
    },
    output: {
        disableCssModuleExtension: true,
        distPath: {
            root: 'dist'
        }
    },
    performance: {
        chunkSplit: {
            strategy: 'split-by-experience'
        }
    }
});
