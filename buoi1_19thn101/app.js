var express = require("express");
var app = express();
var controller = require(__dirname  + "/apps/controllers");
app.use(controller);

app.set("views",__dirname + "/apps/views");
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


var server = app.listen(3000, function(){
   console.log("server is running");
}
);
// });
// var express = require("express");
// // var app = express();
// var controller = require(__dirname  + "/apps/controllers");
// import mongoose from "mongoose";
// // import route from "./router/employee.js";
// // import routeSalary from "./router/salary.js";
// // import routePosition from "./router/positions.js";
// // import routeDepartments from "./router/department.js";

// const app = express();
// // Khai báo một biến PORT, nếu không được thiết lập, sẽ sử dụng giá trị mặc định là 5000
// const PORT = process.env.port || 3000;

// // Khai báo biến URL để lưu đường dẫn đến cơ sở dữ liệu MongoDB
// const URL =
// "mongodb+srv://vuduyen145:e2dXutXXybDOEjIF@cluster0.ncivhx5.mongodb.net/?retryWrites=true&w=majority";

// // Thiết lập middleware để xử lý dữ liệu POST được gửi đến từ client
// app.use(controller);

// app.set("views",__dirname + "/apps/views");
// app.set("view engine", "ejs");
// app.use("/public", express.static(__dirname + "/public"));

// // Thiết lập middleware để cho phép các tài nguyên từ các máy chủ khác yêu cầu truy cập tài nguyên của server
// // app.use(cors());

// // Xử lý request GET đến đường dẫn gốc của server
// // app.use("/api/employee/", route);
// // app.use("/api/salary/",routeSalary);
// // app.use("/api/positions/",routePosition);
// // app.use("/api/departments/",routeDepartments)s

// // Kết nối đến cơ sở dữ liệu MongoDB sử dụng thư viện mongoose
// mongoose
//   .connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => {
//     console.log("Connection to DB");
//     // Bắt đầu lắng nghe các kết nối tới server trên cổng PORT
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("error", err);
//   });
