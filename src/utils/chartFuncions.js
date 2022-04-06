import Swal from "sweetalert2";

export const handleBuy = (setFunction) => {
    setFunction([]);
    Swal.fire("Muchas gracias por su compra");
};

export const handleEmptyChart = (setFunction) => {
    setFunction([]);
    Swal.fire("Se borro el carrito");
};