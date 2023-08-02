import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "./AccordianLinkItem.css";

function AccordianLinkItem(props) {
  return (
    <div className="accordianLinkItem">
      <Link to={props.linkTo} className="link">
        <ListGroup.Item className="linkItem">
          {props.displayName}
        </ListGroup.Item>
      </Link>
    </div>
  );
}

export default AccordianLinkItem;
