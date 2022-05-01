import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import prismjs from 'vite-plugin-prismjs';


// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue()]
})

/*
,[
    "prismjs",{
      "languages": ["javascript", "css", "markup","html"],
      "plugins": ["line-numbers"],
      "theme": "tommorrow",
      "css": true
    }
  ]
  */
/*
import { md } from "./plugins/md";
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
,
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${
        JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }*/