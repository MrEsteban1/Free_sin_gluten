import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { getOrderInfo } from "../../services/firebase";
import "./style.css";

const OrderConsult = () => {
  const [info, setInfo] = useState({ data: {}, loading: true });
  const getData = async (codigo) => await getOrderInfo(codigo);
  return (
    <section className="orderConsult-screen">
      <Formik
        initialValues={{ codigo: "" }}
        onSubmit={async (values) => {
          await getData(values.codigo)
            .then((res) => {
              setInfo({ data: { id: values.codigo, ...res }, loading: false });
            })
            .catch();
        }}
      >
        <Form className="orderConsult-form">
          <label htmlFor="nombre">Codigo:</label>
          <Field
            required
            class="order-field"
            name="codigo"
            placeholder="Ingrese el codigo de busqueda..."
          />
          <button id="order-form-button-comprar" type="submit">
            Consultar
          </button>
        </Form>
      </Formik>
      {!info.loading && (
        <ul className="orderConsult-data">
          <li className="orderConsult-ul-tittle">Informacion de Pedido</li>
          <li>
            Nombre: <strong>{info.data.nombre}</strong>
          </li>
          <li>
            Apellido: <strong>{info.data.apellido}</strong>
          </li>
          <li>
            Direccion: <strong>{info.data.direccion}</strong>
          </li>

          <li>
            Total: <strong>${info.data.total}</strong>
          </li>
          <li>
            Estado: <strong>Falta entregar</strong>
          </li>
        </ul>
      )}
    </section>
  );
};

export default OrderConsult;
