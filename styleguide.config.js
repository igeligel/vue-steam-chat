const loaders = require('vue-webpack-loaders');
/**
 * More info about this styleguide configuration in
 * vue-styleguidist/vue-styleguidist github repository
 */
module.exports = {
  sections: [
    {
      /* The component itself */
      name: 'vue-steam-chat',
      content: 'docs/Introduction.md',
      components: 'src/**/vue-steam-chat.vue',
      // ignore: ['src/ignored-component/ignored-component.vue'],
      sections: [],
    },
  ],
  webpackConfig: {
    module: {
      loaders,
    },
  },
  serverPort: 6062,
};
