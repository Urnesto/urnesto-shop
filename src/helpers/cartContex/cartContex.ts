import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

type cartActions = "REMOVE_ORDER" | "ADD_ORDER" | "CLEAR_ORDERS";

type cartIdentifier = {
  titles: string;
  price: number;
  quantity: number;
  action: cartActions;
};

const setCartItems = (items: cartIdentifier) => {
  const { action } = items;

  switch (action) {
    case "REMOVE_ORDER":
      break;
    case "ADD_ORDER":
      break;
    case "CLEAR_ORDERS":
      break;
    default:
  }
};

const cartContex = createContext();
export default cartContex;
