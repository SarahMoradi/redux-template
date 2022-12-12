import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import { removeProduct } from "../stateManagment/actions/productActions";

const ProductList = (props) => {
  return (
    <div className="mt-5">
      <h5>Product List</h5>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => {
            return (
              <tr key={item.productId}>
                <th scope="row">{item.productId}</th>
                <td>{item.productName}</td>
                <td>{`$`}{item.productPrice}</td>
                <td className="text-center">
                  <Button color="danger" onClick={() => props.remove(item.productId)}>
                    DELETE
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    products: state.productState.items,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
