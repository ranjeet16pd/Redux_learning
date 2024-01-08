import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../store/cartslice";

function Mycard(props) {
  const dispatch = useDispatch();
  const [clickItems, setclickItems] = useState(null);

  const handleClick = (obj, isRemove, key) => {
    if (isRemove === true) {
      setclickItems(key);
      dispatch(removeItems(clickItems));
    } else dispatch(addItems(obj));
  };

  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem", margin: "30px" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={props.Img}
            style={{ width: "100px", height: "130px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.descrip.slice(0, 80)}.....</Card.Text>

          <Card.Text>
            <strong>$ {props.price}</strong>
          </Card.Text>
        </Card.Body>

        <Card.Footer style={{ textAlign: "center", backgroundColor: "white" }}>
          <Button
            variant="primary"
            onClick={() => handleClick(props.obj, props.isRemove, props.Eleid)}
          >
            {props.isRemove ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Mycard;
