import '../styles/GroceryShop.css';
import React, { useState, useEffect, useRef } from 'react';

function GroceryShop() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    pId: '',
    category: 'Fruits',
    pName: '',
    qty: '',
    mrp: '',
    prc: ''
  });
  const [editIndex, setEditIndex] = useState(null);
  const handleReset = () => {
    setFormData({
      pId: '',
      category: 'Fruits',
      pName: '',
      qty: '',
      mrp: '',
      prc: ''
    });
  }
  // Load products from localStorage on initial render
  useEffect(() => {
    const savedProducts = localStorage.getItem('productList');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to localStorage whenever products array changes
  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(products));
  }, [products]);

  // Handle form submission (add or update product)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      pId: formData.pId,
      category: formData.category,
      pName: formData.pName,
      qty: formData.qty,
      mrp: formData.mrp,
      prc: formData.prc,
    };
    if (editIndex !== null) {
      // Edit existing product
      const updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      setProducts(updatedProducts);
      setEditIndex(null);
    } else {
      // Add new product
      setProducts([...products, newProduct]);
    }

    // Reset form
    handleReset();
  };

  // Handle editing product
  const handleEdit = (index) => {
    setEditIndex(index);
    const productToEdit = products[index];
    setFormData({
      pId: productToEdit.pId,
      category: productToEdit.category,
      pName: productToEdit.pName,
      qty: productToEdit.qty,
      mrp: productToEdit.mrp,
      prc: productToEdit.prc
    });
  };

  // Handle deleting product
  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="GroceryShop">
      <nav>
        <li><a href="#">Home</a></li>
        <li><a href="#">Inventory</a></li>
        <li><a href="#">Add Items</a></li>
      </nav>

      <div className="content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="productId">Product Id:</label>
          <input
            type="number"
            placeholder="Enter Product Id"
            id="pId"
            value={formData.pId}
            onChange={(e) => setFormData({ ...formData, pId: e.target.value })}
            required
          />
          <label htmlFor="category">Category:</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          >
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
          </select>
          <label htmlFor="Product Name">Product Name:</label>
          <input
            type="text"
            placeholder="Enter Product Name"
            id="pName"
            value={formData.pName}
            onChange={(e) => setFormData({ ...formData, pName: e.target.value })}
            required
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            placeholder="Enter Quantity"
            id="qty"
            value={formData.qty}
            onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
            required
          />
          <label htmlFor="mrp">MRP:</label>
          <input
            type="number"
            placeholder="Enter MRP"
            id="mrp"
            value={formData.mrp}
            onChange={(e) => setFormData({ ...formData, mrp: e.target.value })}
            required
          />
          <label htmlFor="price">Selling Price:</label>
          <input
            type="number"
            placeholder="Enter Price"
            id="prc"
            value={formData.prc}
            onChange={(e) => setFormData({ ...formData, prc: e.target.value })}
            required
          />
          <button type="submit">{editIndex !== null ? 'Update Item' : 'Add Item'}</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Selling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5">No Items Added</td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product.pId}>
                  <td>{product.pName}</td>
                  <td>{product.category}</td>
                  <td>{product.qty}</td>
                  <td>{product.prc}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GroceryShop;
