import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Components King',
  favicon: '/images/images.png',
  logo: '/images/images.png',
  locales: [['zh-CN', '中文']],
  hash: true,
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
