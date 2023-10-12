const express = require("express");
const app = express();

// Serve JavaScript files as modules
app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.type("module");
      }
    },
  })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
