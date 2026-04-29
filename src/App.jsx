import React from "react";
import ActPodLanding from "./ActPodLanding";
import RefundPolicy from "./RefundPolicy";

export default function App() {
  const path = window.location.pathname;

  if (path === "/refund-policy") {
    return <RefundPolicy />;
  }

  return <ActPodLanding />;
}