import React from "react"

const ProductListTable = ({ products, removeProduct, addProduct }) => {
  return <div>
      <button onClick={() => addProduct("New Product")}>ADD</button>
      <table class="table">
        <thead>
          <th>Index</th>
          <th>Product Name</th>
          <th>Action</th>
        </thead>
        {products.map((product, index) => <tr>
            {" "}
            <td>{index}</td> <td>{product}</td>
            <td>
              <a href={"/productShow/" + index}>
                SHOW
              </a> |<button onClick={() => removeProduct(product)}>DELETE</button>
            </td>
          </tr>)}
      </table>
    </div>;
};

export default ProductListTable;