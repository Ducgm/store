// Import thư viện express để tạo router
const express = require("express");

// Tạo một instance của router từ express
const router = express.Router();

// Import controller để xử lý các yêu cầu liên quan đến sản phẩm
const productController = require("../controllers/productController");

// Định nghĩa route cho yêu cầu GET đến đường dẫn chính ('/') để lấy danh sách tất cả các sản phẩm
router.get("/", productController.getProducts);

// Định nghĩa route cho yêu cầu GET đến đường dẫn chứa ID sản phẩm (ví dụ: '/:productId') để lấy thông tin chi tiết của sản phẩm
router.get("/:productId", productController.getProduct);

// Xuất router để sử dụng trong các phần khác của ứng dụng
module.exports = router;
