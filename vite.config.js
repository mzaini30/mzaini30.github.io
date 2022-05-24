import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import Markdown, {meta} from 'vite-plugin-md'
import generateSitemap from 'vite-plugin-pages-sitemap'
import Layouts from 'vite-plugin-vue-layouts';
import Prism from 'markdown-it-prism'
import Inspector from "vite-plugin-vue-inspector"
import yaml from 'vite-plugin-yaml2'
import legacy from "@vitejs/plugin-legacy"

const hostname = 'https://mzaini30.js.org/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    yaml(),
    legacy(),
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }), 
    pages({
      onRoutesGenerated: routes => (generateSitemap({ routes, hostname })),
      extensions: ['vue', 'md'],
    }),
    Markdown({
      headEnabled: true,
      builders: [meta()],
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      }
    }),
    Layouts(),
    Inspector({
      enabled: false
    })
  ]
})
