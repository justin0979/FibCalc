module.exports = {
  presets: [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ],
    "@babel/react"
  ],
  plugins: [
    "@babel/transform-runtime",
    "@babel/proposal-class-properties",
    [
      "module-resolver",
      {
        alias: {
          "@src": "./src",
          "@components": "./src/components",
          "@images": "./src/images",
          "@sass": "./src/sass"
        }
      }
    ]
  ]
};
