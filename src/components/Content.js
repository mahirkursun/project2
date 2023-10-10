import "../style/content.scss";

const Content = ({ products, currentCategory, deleteProduct }) => {
  return (
    <div className="content">
      <h3>Product List - {currentCategory}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price($)</th>
            <th>Units In Stock</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products
            .map(
              (product) =>
                !product.isDeleted && (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.unitsInStock}</td>
                    <td>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="tdSil"
                      >
                        sil
                      </button>
                      <button className="tdDuzenle">düzenle</button>
                    </td>
                  </tr>
                )
            )
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
