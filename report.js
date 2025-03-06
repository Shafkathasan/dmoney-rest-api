const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    collection: `https://api.postman.com/collections/42658721-f09cdd63-3911-40ea-914e-e7ee5ffc3364?access_key=${process.env.access_key}`,
    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
