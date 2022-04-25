import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

const OrderConsult = () => {
  const [info, setInfo] = useState({ codigo: "", data: {} });
  return (
    <section className="orderConsult-screen">
      <Formik initialValues={{ codigo: "" }} onSubmit={async () => {}}>
        <Form>
          <label htmlFor="nombre">Codigo:</label>
          <Field
            class="order-field"
            name="codigo"
            placeholder="Ingrese el codigo de busqueda..."
          />
          <button id="order-form-button-comprar" type="submit">
            Consultar
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default OrderConsult;
