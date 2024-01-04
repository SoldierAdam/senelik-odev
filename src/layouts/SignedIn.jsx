import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://doodleipsum.com/700/avatar-2?i=a84e32424b61b2c7a0c4e9d6451375c2"
        />
        <Dropdown pointing="top left" text="Erman">
          <Dropdown.Menu>
            <Dropdown.Item text="My Information" icon="info" />
            <Dropdown.Item onClick={signOut} text="Log Out" icon="sign out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

export default SignedIn;
