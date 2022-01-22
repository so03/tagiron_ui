## 環境構築

### Storybookの導入

#### Tailwindcssを使えるようにする
```
yarn add -D @storybook/addon-postcss
```

reference: https://medium.com/storybookjs/building-a-front-end-project-with-react-tailwindcss-and-storybook-742bdb1417da

```.storybook/main.js
const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config
  }
}
```

```.storybook/preview.js
+ import '../src/index.css';
```
