import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-alias'
import path from 'path'

  const customResolver = resolve({
    extensions: ['.jpg', '.ts', '.tsx', '.svg']
  });
  const projectRootDir = path.resolve(__dirname);

  export default{
    plugins: [
      alias({
        entries: [
          {
            find: '@',
            replacement: resolve(projectRootDir, './src')
          },
          {
            fing: '@assets',
            replacement: resolve(projectRootDir,'./src/assets' )
          },
          {
            find: '@componetns',
            replacement: resolve(projectRootDir, './src/components')
          }
        ],
        customResolver
      }),
      resolve()
    ]
  }

