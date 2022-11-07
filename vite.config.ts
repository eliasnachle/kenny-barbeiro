import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
})

// export default defineConfig({
//   plugins: [
//     svgr(),
//     react({
//       jsxImportSource: '@emotion/react',
//       babel: {
//         plugins: ['@emotion/babel-plugin'],
//       },
//     }),
//   ],
//   esbuild: {
//     jsxFactory: `jsx`,
//     jsxInject: `import { jsx } from '@emotion/react'`,
//   },
// })