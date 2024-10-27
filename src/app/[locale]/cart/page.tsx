import React from "react";

import CartComponent from "@/components/custom/cart.component";
import PaymentCartComponent from "@/components/custom/paymentCart.component";

const CartPage = () => {
  return (
    <div>
      <CartComponent />
      <PaymentCartComponent />
    </div>
  );
};

export default CartPage;
