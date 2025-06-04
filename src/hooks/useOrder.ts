import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExists = order.find((el) => item.id === el.id);

    if (itemExists) {
      const updatedOrder = order.map((el) =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((el) => el.id !== id));
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    removeItem,
    order,
    tip,
    setTip,
    placeOrder,
  };
}
