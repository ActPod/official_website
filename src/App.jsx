import React from "react";
import ActPodLanding from "./ActPodLanding";
import RefundPolicy from "./RefundPolicy";
import PodcashTerms from "./PodcashTerms";

export default function App() {
  const path = window.location.pathname;

  if (path === "/refund-policy") {
    return <RefundPolicy />;
  }

  if (path === "/podcash-terms") {
    return <PodcashTerms />;
  }

  return <ActPodLanding />;
}