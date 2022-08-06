import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="newProductItem">
          <label>Product Name</label>
          <input type="text" placeholder="Quần Đội Đầu" />
        </div>
        <div className="newProductItem">
          <label>Stock </label>
          <input type="text" placeholder="100" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductButton">Create</button>
      </form>
    </div>
  );
}
