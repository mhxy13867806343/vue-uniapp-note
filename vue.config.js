const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
module.exports = {
    parallel: false,
    configureWebpack: {
        plugins: [
            ScriptSetup({ /* options */ }),
            require('unplugin-auto-import/webpack')(
                {
                    // targets to transform
                    include : [
                        /\.[tj]sx?$/ ,
                        /\.vue$/ ,
                        /\.vue\?vue/ ,
                        /\.md$/ ,
                    ] ,
                    
                    // global imports to register
                    imports : [
                        // 插件预设支持导入的api
                        'uni-app'
                        // 自定义导入的api
                    ] ,
                    
                    // Generate corresponding .eslintrc-auto-import.json file.
                    // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
                    eslintrc : {
                        enabled : false , // Default `false`
                        filepath : './.eslintrc-auto-import.json' , // Default `./.eslintrc-auto-import.json`
                        globalsPropValue : true , // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
                    } ,
                    
                    // Filepath to generate corresponding .d.ts file.
                    // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
                    // Set `false` to disable.
                    dts : './auto-imports.d.ts' ,
                }
            ),
        ],
    },
    chainWebpack (config) {
        // disable type check and let `vue-tsc` handles it
        config.plugins.delete('fork-ts-checker')
    },
}
