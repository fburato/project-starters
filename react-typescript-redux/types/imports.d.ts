/**
 * This declaration allows to type correctly the images imported in the source code 
 * as strings, which are loaded as files given the `file-loader` used in webpack.config.js
 */
declare module "*.gif" {
  const value: string;
  export = value;
}
