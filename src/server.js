"use strict";

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and ready to accept requests.`);
  console.log(`You can access the API at http://localhost:${PORT}/api`);
});
