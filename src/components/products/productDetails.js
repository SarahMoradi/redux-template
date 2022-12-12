import { Form, FormGroup, Input, Label } from "reactstrap";

const productDetials = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
      </Form>
    </div>
  );
};
