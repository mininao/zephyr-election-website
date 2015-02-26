var browserSync = require("browser-sync");

var config = {
  ui: {
    port: 3051,
    weinre: {
      port: 9090
    }
  },
  proxy: "localhost:3000",
  port: "3050"
};

browserSync(config);
