const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("admin/edit-product", {
    pageTitle: "Add-Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.getEditProduct = (req, res) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const productId = req.params.productId;
  Product.findByPk(productId)
   .then((product) => {
      if(!product){
         return res.redirect('/');
      }
      res.render("admin/edit-product", {
        pageTitle: "Add-Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
   })
   .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  Product.findByPk(productId)
  .then(product=>{
   product.title = updatedTitle;
   product.imageUrl = updatedImageUrl;
   product.price = updatedPrice;
   product.description = updatedDescription;
   return product.save();
  })
  .then(result=>{
      console.log(result);
      res.redirect("/admin/products");
  })
  .catch(err => console.log(err))
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  Product.create({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description,
  })
    .then((result) => {
      console.log("Product Created");
      res.redirect('/admin/products')
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAdminProducts = (req, res) => {
  Product.findAll()
    .then((products) => {
      res.render("admin/products", {
        pageTitle: "Admin Products",
        path: "/admin/products",
        products: products,
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res) => {
  const productId = req.body.productId;
  Product.findByPk(productId)
  .then(product=>{
   product.destroy();
   res.redirect("/admin/products");
  })
  .catch(err => console.log(err));
};
