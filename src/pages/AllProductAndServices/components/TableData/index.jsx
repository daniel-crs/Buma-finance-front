import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import ProductModal from "../ProductModal";
import ServiceModal from "../ServiceModal";

import Button from "react-bootstrap/Button";

import { useState } from "react";

function TableData({
  pageTitle,
  serviceId,
  productId,
  nome,
  categoria,
  valor,
}) {
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
          <Button onClick={() => setOpenModal(true)}>
            <span className="iconCustom">
              <FaTrash />
            </span>
          </Button>
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
                <ServiceModal
                  isOpen={openModal}
                  setModalOpen={() => setOpenModal(!openModal)}
                  service={serviceId}
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
