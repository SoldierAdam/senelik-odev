import React from "react";
import { Button, Menu } from "semantic-ui-react";

function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button onClick={signIn} primary>
          Login
        </Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Sign In
        </Button>
      </Menu.Item>
    </div>
  );
}

export default SignedOut;
