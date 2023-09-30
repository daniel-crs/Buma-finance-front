import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import ProductModal from "../ProductModal";
import ServiceForm from "../ServiceForm";

import Button from "react-bootstrap/Button";

import { useState } from "react";
import { Link } from "react-router-dom";

function TableData({ pageTitle, productId, nome, categoria, valor }) {
  const [productModalShow, setModalShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
          <Button onClick={() => setOpenModal(true)}>
            <span className="iconCustom">
              <MdModeEdit />
            </span>
          </Button>

          {(() => {
            if (pageTitle === "Produto") {
              return (
                <ProductModal
                  isOpen={openModal}
                  setModalOpen={() => setOpenModal(!openModal)}
                  product={productId}
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
