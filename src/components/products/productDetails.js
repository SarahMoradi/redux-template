import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addProduct } from "../stateManagment/actions/productActions";

const ProductDetials = ({ addProductToList }) => {
  const saveProduct = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    let productId = form.get("id");
    productId = parseInt(productId);
    const productName = form.get("name");
    let productPrice = form.get("price");
    productPrice = parseInt(productPrice);
    addProductToList({ productId, productName, productPrice });
    alert("Product Was Added Successfully!");
    event.target.reset();
  };

  return (
    <div className="mt-5">
      <Form onSubmit={(event) => saveProduct(event)}>
        <FormGroup>
          <Label>Product ID</Label>
          <Input name="id" type="number" placeholder="Enter Product ID" />
        </FormGroup>
        <FormGroup>
          <Label>Product Name</Label>
          <Input name="name" placeholder="Enter Product Name" />
        </FormGroup>
        <FormGroup>
          <Label>Product Price</Label>
          <Input name="price" type="number" placeholder="Enter Product Price" />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="success">
            Save Product
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToList: (item) => dispatch(addProduct(item)),
  };
};
export default connect(null, mapDispatchToProps)(ProductDetials);
