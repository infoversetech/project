import React from "react";
import PropertyPage from "@/components/property/PropertyPage";

export default function Page({ params }: { params: { id: string } }) {
  return <PropertyPage id={params.id} />;
}