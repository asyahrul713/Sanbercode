const newman = require("newman")

newman.run({
    collection: "json-collection/ahmadsyahrul.postman_collection.json",
    environment: "json-env/ahmadsyahrul.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
