// const http = require("http");
// const server = http.createServer((req, res) => {
//     console. log('url', req.url);
//     if(req.url === "/"){
//         res.setHeader ('Content-Type',"text/html");
//          res.write("shtml><body><h1>Home Page</h1></body>
//          res.end();
//      } else if(req.url === "/api/products"){
//          const products = [
//              {id: 1, name: "Product A"},
//              {id: 2, name: "Product B"}
//         res.end (JSON. stringify(products));
//      } else {
//          console. log('Giờ thì em biết rồi');
//      }
//     });

// const check = (reg, reg, next) => {
//   const status = false;
//   if (status) {
//     console.log("chào");
//   } else {
//     console.log("có, có cái nịt");
//   }
// };
// app.get("/api/products", check, (req, res) => {
//   const products = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" },
//   ];
//   res.json(products);
// });

/**
 * npm i -g json-server: Cài đặt module vào ổ hệ thống
 * npm i --save express:
     - Khi sử dụng npm i mặc định được cài đặt luôn
     - Bắt buộc phải có module này thì mới chạy project
  * dependencies: { "express": 1.2.3 }
 * npm i --save-dev nodemon
 * 
 */
