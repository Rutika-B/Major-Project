'use client'
import { BrokerageDetails } from "@/api/upstoxData";
import React, { useEffect, useState } from "react";

function page() {
  const [brokerInfo, setinfo] = useState<any | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      const info = await BrokerageDetails();
      setinfo(info);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div>page</div>
      {!brokerInfo ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(brokerInfo, null, 2)}</pre>
      )}
    </>
  );
}

export default page;
