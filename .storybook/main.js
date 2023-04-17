const config = {
    addons: [
        'storycap',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: ['../public'],
    stories: [
        '../src/**/*.stories.@([tj]s[x]|mdx)'
    ],
};

export default config;