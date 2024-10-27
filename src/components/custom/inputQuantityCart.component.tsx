// "use client";
// import React from "react";

// import {productSelectStore} from "@/store/productSelect.store";
// import {cartStore} from "@/store";
// import {typeProductSelect, typeProductStore} from "@/types";
// import {Input} from "../ui/input";
// import dropdownSmallIcon from "@/assets/svg/Drop-Down-Small.svg";
// import dropupSmallIcon from "@/assets/svg/Drop-Up-Small.svg";
// import Image from "next/image";

// const InputQuantityCartComponent: React.FC<{data: typeProductSelect}> = ({data}) => {
//   const {cart, setCart} = cartStore();

//   const isQuantityValid = (quantity: number) => {
//     const unitsInStock = data.product.unitsInStock || 1;

//     return quantity >= 1 && quantity <= unitsInStock;
//   };

//   const handleUp = () => {
//     if(data.quantity < data.product.quantity)
//   }

//   const handleUpdateQuantity = (e: React.ChangeEvent<Ele>)

//   return (
//     <div className="relative flex items-center overflow-hidden rounded">
//       <Input
//         type="number"
//         className="h-[44px] w-[72px] border border-Text2"
//         value={data.quantity}
//         onChange={(e) => handleUpdateQuantity(e)}
//       />
//       <div className="absolute right-0 top-0">
//         <Image src={dropupSmallIcon} sizes="16" alt="dropup small" onClick={handleUp}/>
//         <Image src={dropdownSmallIcon} sizes="16" alt="dropdown small" onClick={handleDown} />
//       </div>
//     </div>
//   );
// };

// export default InputQuantityCartComponent;
