import { async } from "@firebase/util";
import { Formik, Form, Field } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../../contexts/chartContext";
import { addOrder } from "../../../services/firebase";

const OrderForm = () => {
  const {} = useCart()
  const navigate = useNavigate();
  const { addBuyer, deleteBuyer, emptyCart, getBuyer, buyer } = useCart();
  const hadleButtonCancelar = async () => {
    await deleteBuyer();
    await emptyCart();
    navigate("/productos/sin%filtro");
  };

  useEffect(()=>{ 
    const subirData = async () =>  {
      let id
      if(buyer.nombre !== ""){
        id = await addOrder( buyer )
        Swal.fire("Muchas gracias por su compra, su codigo de compra es : " + id)
        await hadleButtonCancelar()
      } 
    }
      subirData(  )
  },[buyer])

  return (
    <section id="order-form-section">
      <h3>Ingrese sus datos:</h3>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          direccion: "",
        }}
        onSubmit={async(values) => {
          addBuyer(values) 
          //const id = await addOrder( await getBuyer() )
         // Swal.fire("Muchas gracias por su compra, su codigo de compra es : " + id)
          //hadleButtonCancelar()
        }}
      >
        <Form id="order-form">
          <label htmlFor="nombre">Nombre:</label>
          <Field
            class="order-field"
            name="nombre"
            placeholder="Ingrese su nombre..."
          />
          <label htmlFor="apellido">Apellido:</label>
          <Field
            class="order-field"
            name="apellido"
            placeholder="Ingrese su apellido..."
          />
          <label htmlFor="email">Email:</label>
          <Field
            class="order-field"
            name="email"
            placeholder="Ingrese su email..."
            type="email"
          />
          <label htmlFor="direccion">Direccion:</label>
          <Field
            required
            class="order-field"
            name="direccion"
            placeholder="Ingrese su direccion..."
          />
          <div id="order-form-buttons">
            <button id="order-form-button-comprar" type="submit">
              Comprar
            </button>
            <button
              id="order-form-button-borrar"
              type="button"
              onClick={hadleButtonCancelar}
            >
              Cancelar
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default OrderForm;
