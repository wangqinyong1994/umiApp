import { defineConfig } from 'umi';
import px2rem from 'postcss-pxtorem';

export default defineConfig({
  define: {
    'process.env': {
      TQ_ENV: process.env.TQ_ENV,
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  ignoreMomentLocale: true,
  alias: {},
  plugins: [],
  extraPostCSSPlugins: [
    px2rem({
      selectorBlackList: ['t_npx'], //以包含t_npx的class不需要转换
    }),
  ],
});
