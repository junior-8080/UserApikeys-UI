import React from "react";
import AvailableApiCard from "./AvailableApiCard";
import availableApiData from '../data/available.json'

export default function AvailableApis() {
  const mockApis = availableApiData
  return (
    <div className="mt-20">
      <h1 className="text-center text-accent6 text-2xl">Available Apis</h1>
      <div className="flex justify-between flex-wrap available-apis">
          {
            mockApis.map(item => <AvailableApiCard data ={item}/>)
          }
      </div>
    </div>
  );
}
