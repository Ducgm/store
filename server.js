// Import thư viện express để tạo ứng dụng web
const express = require("express");

// Import hàm kết nối đến cơ sở dữ liệu từ file cấu hình
const connectDB = require("./config/db");

// Import hàm để seed dữ liệu vào cơ sở dữ liệu từ file seed
const seedDatabase = require("./seed/productsSeed");

// Import biến môi trường từ file .env
require("dotenv").config();

// Xác định cổng mà server sẽ lắng nghe, sử dụng giá trị từ biến môi trường hoặc mặc định là 3000
const PORT = process.env.PORT || 3000;

// Tạo một instance của ứng dụng express
const app = express();

// Cấu hình middleware để parse dữ liệu từ form gửi lên dưới dạng URL-encoded
app.use(express.urlencoded({ extended: true }));

// Cấu hình middleware để parse dữ liệu JSON gửi lên
app.use(express.json());

// Kết nối đến cơ sở dữ liệu
connectDB();

// (Tùy chọn) Seed dữ liệu vào cơ sở dữ liệu, nếu cần thiết
// seedDatabase();

// Thiết lập engine view là EJS để render các view từ các template .ejs
app.set("view engine", "ejs");

// Cấu hình middleware để phục vụ các file tĩnh từ thư mục 'public'
app.use(express.static("public"));

// Đăng ký các route từ file router
app.use("/", require("./routes/product"));

// Khởi động server và lắng nghe các yêu cầu trên cổng đã chỉ định
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
