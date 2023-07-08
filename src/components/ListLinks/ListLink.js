import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

function ListLink(props) {
  const LinkText = props.LinkText;

  return(
    {LinkText.map(e => {
        <Link></Link>
    })}
  )
}
