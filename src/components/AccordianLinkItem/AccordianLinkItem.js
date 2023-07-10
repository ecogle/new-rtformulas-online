import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AccordianLinkItem.css";

const linkStyle = {
  textDecoration: "none",
};
function AccordianLinkItem(props) {
  return (
    <div class="accordianLinkItem">
      <Link to={props.linkTo} style={linkStyle}>
        <ListGroup.Item>{props.displayName}</ListGroup.Item>
      </Link>
    </div>
  );
}

export default AccordianLinkItem;
