import { Alert, Button } from "react-bootstrap";
function BootstrapButtonAlert(params) {
  return (
    <div>
      <h1>Bootstrap CSS in React JS</h1>
      <h1>Bootstrap Buttons</h1>
      <Button variant="primary">Bootstrap primary Button</Button>
      <Button variant="secondary">Bootstrap secondary Button</Button>
      <Button variant="success">Bootstrap success Button</Button>
      <Button variant="danger">Bootstrap danger Button</Button>
      <Button variant="warning">Bootstrap warning Button</Button>
      <Button variant="info">Bootstrap info Button</Button>
      <Button variant="light">Bootstrap light Button</Button>
      <Button variant="dark">Bootstrap dark Button</Button>
      <Button variant="link">Bootstrap Link Button</Button>
      <h1>Outline Buttons</h1>
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
      <h1>Button tags</h1>
      <Button href="#">Link</Button> <Button type="submit">Button</Button>
      <Button as="input" type="button" value="Input" />
      <Button as="input" type="submit" value="Submit" />
      <Button as="input" type="reset" value="Reset" />
      <h1>Button Sizes</h1>
      <Button variant="primary" size="lg">
        Large button
      </Button>
      <Button variant="secondary" size="lg">
        Large button
      </Button>
      <Button variant="primary" size="sm">
        Small button
      </Button>
      <Button variant="secondary" size="sm">
        Small button
      </Button>
      <h1>Bootstrap Alert CSS in React JS</h1>
      <Alert variant="primary">
        This is a primary variant alert—check it out!
      </Alert>
      <Alert variant="secondary">
        This is a secondary variant alert—check it out!
      </Alert>
      <Alert variant="success">
        This is a success variant alert—check it out!
      </Alert>
      <Alert variant="danger">
        This is a danger variant alert—check it out!
      </Alert>
      <Alert variant="warning">
        This is a warning variant alert—check it out!
      </Alert>
      <Alert variant="info">This is a info variant alert—check it out!</Alert>
      <Alert variant="light">This is a light variant alert—check it out!</Alert>
      <Alert variant="dark">This is a dark variant alert—check it out!</Alert>
      <h3>Alert Link</h3>
      <Alert variant="primary">
        This is a primary alert with{" "}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
    </div>
  );
}
export default BootstrapButtonAlert;
