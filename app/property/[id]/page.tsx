import React from "react";
import PropertyPage from "@/components/property/PropertyPage";
import { MOCK_PROPERTY_DATA } from "@/lib/mockData";

export async function generateStaticParams() {
  return [
    { id: '123' }, // Corresponds to the demo link on the homepage
    { id: MOCK_PROPERTY_DATA.id },
    { id: 'property-abc' }, // Example additional ID
    { id: 'property-xyz' }, // Example additional ID
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  return <PropertyPage id={params.id} />;
}