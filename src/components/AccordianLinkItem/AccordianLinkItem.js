import React from "react";
import { ListGroup } from "react-bootstrap";
import "./AccordianLinkItem.css";

function AccordianLinkItem(props) {
  return (
    <div className="accordianLinkItem">
      <ListGroup.Item href={props.linkTo} action="true" className="linkItem">
        {props.displayName}
      </ListGroup.Item>
    </div>
  );
}

export default AccordianLinkItem;
