"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react"; 

export default function Home() {
  const TableUI = dynamic(() => import("./components/TableUI")); 
  const UITable=dynamic(()=>import('./components/UITable'))
  return (
    <ChakraProvider>
      <Suspense fallback={<p>Loading</p>}> 
      {/* <UITable/> */}
        <TableUI />
      </Suspense>
    </ChakraProvider>
  );
}
