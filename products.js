let request = require("request");
let endpoint = "products";
let apiKey = process.env.API_KEY;
let apiToken = process.env.API_TOKEN;
let storeName = process.env.STORE_NAME;

let options = {
  method: "GET",
  url: `https://${apiKey}:${apiToken}@${storeName}/admin/api/2023-01/${endpoint}.json`,
  headers: {
    "Content-type": "application/json",
  },
};

request.get(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});
