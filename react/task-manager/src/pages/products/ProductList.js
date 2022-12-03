import React from "react";
import useRouteProtector from "../../shared/hooks/useRouteProtector";
import Product from "./Product";

export default function ProductList() {
  useRouteProtector();
  let products = [
    {
      name: "Apple iPhone 11",
      specs: ["Rear Camera:12 MP", "Front Camera:12 MP", "OS:IOS"],
    },
    {
      name: "Nokia N95",
      specs: ["Rear Camera:4 MP", "Front Camera:4 MP", "OS:NA"],
    },
    {
      name: "Nokia 3110",
      specs: ["Rear Camera:2 MP", "Front Camera:NA", "OS:NA"],
    },
  ];
  return (
    <div>
      {products.map((x) => (
        <Product name={x.name} specifications={x.specs} />
      ))}
    </div>
  );
}
