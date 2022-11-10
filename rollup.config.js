import { defineConfig } from 'rollup'

export default defineConfig([{
  input: "./index.mjs",
  output: {
    file: "./cjs/index.js",
    format: "cjs",
  },
}
])