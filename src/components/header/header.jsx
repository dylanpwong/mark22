import React from "react";
import "./header.scss";
class Header extends React.Component {
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (
      <div>
        <div>Hello I'm</div>
        <div class="name-container">Dylan Wong</div>
      </div>
    );
  }
}

export default Header;
