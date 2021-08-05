module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    [
      "@babel/preset-react", {
        "runtime": "automatic"
      }
    ]

  ],
  env: {
    production: {
      only: ["src"],
    }
  }
};
