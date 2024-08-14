// Import thư viện mongoose để làm việc với MongoDB
const mongoose = require("mongoose");

// Tạo một schema mới cho sản phẩm với các thuộc tính và kiểu dữ liệu tương ứng
const productSchema = new mongoose.Schema(
  {
    // Thuộc tính 'name' là tên sản phẩm, kiểu dữ liệu là chuỗi và bắt buộc phải có
    name: { type: String, required: true },

    // Thuộc tính 'description' là mô tả sản phẩm, kiểu dữ liệu là chuỗi và bắt buộc phải có
    description: { type: String, required: true },

    // Thuộc tính 'price' là giá của sản phẩm, kiểu dữ liệu là số và bắt buộc phải có
    price: { type: Number, required: true },

    // Thuộc tính 'stock' là số lượng sản phẩm có sẵn trong kho, kiểu dữ liệu là số và bắt buộc phải có
    stock: { type: Number, required: true },

    // Thuộc tính 'image_url' là đường dẫn tới hình ảnh của sản phẩm, kiểu dữ liệu là chuỗi và không bắt buộc phải có (mặc định là chuỗi rỗng)
    image_url: { type: String, default: "" },
  },
  {
    // Cấu hình tự động thêm các trường 'createdAt' và 'updatedAt' khi tạo mới hoặc cập nhật bản ghi
    timestamps: true,
  }
);

// Xuất schema này như một model với tên 'Products', có thể sử dụng trong các phần khác của ứng dụng
module.exports = mongoose.model("Products", productSchema);
