import "../style/content.scss";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = ({ products, currentCategory, deleteProduct, getProduct }) => {
  return (
    <div className="content">
      <ToastContainer />
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
                      <button
                        onClick={() => getProduct(product.id)}
                        className="tdDuzenle"
                      >
                        düzenle
                      </button>
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
