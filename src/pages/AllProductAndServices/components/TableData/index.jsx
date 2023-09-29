import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import ProductForm from "../ProductForm";
import ServiceForm from "../ServiceForm";

import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TableData({ pageTitle, productId, nome, categoria, valor }) {
  const [productModalShow, setModalShow] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [productId]);

  console.log(data);

  return (
    <tr className="listLines">
      <td className="checkboxArea">
        <div className="customCheckbox">
          <input id={productId} type="checkbox" />
          <label htmlFor={productId}></label>
        </div>
      </td>
      <td className="nameArea">{nome}</td>
      <td className="categoriaArea">{categoria}</td>
      <td className="valorArea">{valor}</td>
      <td className="opcaoArea">
        <div className="iconsPosition">
          <Link className="iconCustom">
            <FaTrash />
          </Link>
          <Button onClick={() => setModalShow(true)}>
            <span className="iconCustom">
              <MdModeEdit />
            </span>
          </Button>

          {(() => {
            if (pageTitle === "Produto") {
              return (
                <ProductForm
                  show={productModalShow}
                  onHide={() => setModalShow(false)}
                />
              );
            } else if (pageTitle === "Serviço") {
              return (
                <ServiceForm
                  show={productModalShow}
                  onHide={() => setModalShow(false)}
                />
              );
            }
          })()}
        </div>
      </td>
    </tr>
  );
}

export default TableData;
