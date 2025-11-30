"use client";

import React, { createContext, useContext, useState } from "react";
import type { CartItem } from "@/context/CartContext";
import type { OrderStatus } from "@/components/OrderProgress";

export interface Order {
  id: string;
  items: CartItem[];
  status: OrderStatus;
  poNumber: string;
  jobsiteName: string;
  jobsiteAddress: string;
  deliveryDate: string;
  deliveryTime: string;
  sameDay: boolean;
  notes?: string;
  paymentMethod: "card" | "terms";
  supplierId: string;
  createdAt: string;
}

interface OrdersContextValue {
  orders: Order[];
  createOrder: (
    input: Omit<Order, "id" | "status" | "createdAt">
  ) => string;
  updateStatus: (id: string, status: OrderStatus) => void;
  getOrderById: (id: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder: OrdersContextValue["createOrder"] = (input) => {
    const id =
      "ORD-" + Math.floor(Math.random() * 1_000_000).toString().padStart(6, "0");

    const newOrder: Order = {
      id,
      status: "gathering",
      createdAt: new Date().toISOString(),
      ...input,
    };

    setOrders((prev) => [newOrder, ...prev]);
    return id;
  };

  const updateStatus: OrdersContextValue["updateStatus"] = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const getOrderById: OrdersContextValue["getOrderById"] = (id) =>
    orders.find((o) => o.id === id);

  return (
    <OrdersContext.Provider
      value={{ orders, createOrder, updateStatus, getOrderById }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
};
