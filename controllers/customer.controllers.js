const request = require("request");
let apiKey = process.env.API_KEY;
let apiToken = process.env.API_TOKEN;
let storeName = process.env.STORE_NAME;
let endpoint = "products";

let options = {
  method: "GET",
  url: `https://${apiKey}:${apiToken}@${storeName}/admin/api/2023-01/${endpoint}.json`,
  headers: {
    "Content-type": "application/json",
  },
};

exports.products = (req, res) => {
  try {
    request(options, (http_request, http_response) => {
      let data = JSON.parse(http_response.body);
      //   console.log(Object.keys(data.products).length);
      res.render("home", { data: data });
    });
  } catch (ex) {
    console.log(ex);
    throw new Error(ex);
  }
};

exports.changeProduct = (req, res) => {
  try {
    request(options, (http_request, http_response) => {
      let data = JSON.parse(http_response.body);
      res.render("updatePage", { data: data });
    });
  } catch (ex) {
    console.log(ex);
    throw new Error(ex);
  }
};

// exports.updateProduct = (req, res) => {
//   return res.redirect("/");
// };
