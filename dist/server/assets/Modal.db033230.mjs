import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { a as jsx } from "../ServerApp.mjs";
import "react-dom/server";
import "react-router-dom/server.mjs";
import "react-router-dom";
import "@tanstack/react-query";
import "react/jsx-runtime";
const modalRoot = document.getElementById("modal");
const Modal = ({
  children
}) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);
  return createPortal(/* @__PURE__ */ jsx("div", {
    children
  }), elRef.current);
};
export {
  Modal as default
};
