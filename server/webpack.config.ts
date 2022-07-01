import WebpackNodeExternals from 'webpack-node-externals'
import TerserPlugin from 'terser-webpack-plugin'
import { Configuration } from 'webpack'
import { resolve } from 'path'

const { NODE_ENV } = process.env
/**
 * gets webpack mode depened on current NODE_ENV
 * @param {string} env
 * @returns {string}
 */
function getWebpackMode(env: string): 'none' | 'development' | 'production' | undefined {
  if (!env) return undefined

  if (env === 'production') return 'production'

  return 'development'
}

const config: Configuration = {
  entry: './server.ts',
  output: {
    path:
      getWebpackMode(NODE_ENV!) === 'development'
        ? resolve(__dirname, 'dist/debug')
        : resolve(__dirname, 'dist/release'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  devtool: getWebpackMode(NODE_ENV!) === 'development' ? 'eval' : false,
  mode: getWebpackMode(NODE_ENV!),
  externals: [WebpackNodeExternals()],
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      resolve(__dirname, 'app'),
      resolve(__dirname, 'config'),
      resolve(__dirname, 'database'),
      'node_modules',
    ],
    alias: {
      '@app': [resolve(__dirname, 'app/')],
      '@database': [resolve(__dirname, 'database/')],
      '@config': [resolve(__dirname, 'config/')],
      '@server': [resolve(__dirname, 'server.ts')]
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: getWebpackMode(NODE_ENV!) === 'production',
    minimizer: getWebpackMode(NODE_ENV!) === 'production' ? [new TerserPlugin()] : [],
  },
}

export default config
