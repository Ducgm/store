// Import model 'Product' từ file 'products.js'
const Product = require("../models/products");

// Hàm xử lý để lấy danh sách tất cả các sản phẩm
exports.getProducts = async (req, res) => {
  try {
    // Sử dụng Mongoose để tìm và lấy tất cả các sản phẩm từ database
    const products = await Product.find();

    // In danh sách sản phẩm ra console (chủ yếu để debug)
    console.log(products);

    // Render trang index và truyền danh sách sản phẩm vào view
    res.render("pages/index", { products });
  } catch (error) {
    // Bắt lỗi nếu có vấn đề xảy ra và trả về phản hồi với mã trạng thái 500 và thông báo lỗi
    return res.status(500).json({ status: 500, message: error.message });
  }
};

// Hàm xử lý để lấy thông tin chi tiết của một sản phẩm theo ID
exports.getProduct = async (req, res) => {
  try {
    // Lấy 'productId' từ tham số URL
    const { productId } = req.params;

    // Sử dụng Mongoose để tìm sản phẩm theo ID trong database
    const product = await Product.findById(productId);

    // Nếu không tìm thấy sản phẩm với ID đã cho, trả về mã trạng thái 404 và thông báo lỗi
    if (!product) {
      return res.status(404).json({ status: 404, message: "Product not found" });
    }

    // Nếu tìm thấy sản phẩm, render trang chi tiết và truyền thông tin sản phẩm vào view
    res.render("pages/detail", { product });
  } catch (error) {
    // Bắt lỗi nếu có vấn đề xảy ra và trả về phản hồi với mã trạng thái 500 và thông báo lỗi
    return res.status(500).json({ status: 500, message: error.message });
  }
};
