module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    globals: {
        NodeJS: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts']
            },
        },
        react: {
            version: '0.0.0',
        },
    },
    rules: {
        // 添加自定义规则
        'no-console': 4,
        'no-debugger': 4,
    },
}