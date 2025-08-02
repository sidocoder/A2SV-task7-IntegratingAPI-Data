"use client";

import { useEffect, useState } from "react";
import { fetchOpportunities } from "../utils/api";
import OpportunityCard from "../components/OpportunityCard";
import { Opportunity } from "../types/opportunity";

export default function HomePage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOpportunities = async () => {
      const data = await fetchOpportunities();
      if (data.length === 0) {
        setError("No opportunities found or failed to fetch.");
      } else {
        setOpportunities(data);
      }
    };
    loadOpportunities();
  }, []);

  return (
    <div className="font-sans min-h-screen m-6 mx-40 sm:p-10 bg-white cont">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Opportunities</h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Sort by:</span>
          <select className="border font-bold border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Most relevant</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="flex flex-col">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} opportunity={opportunity} />
          ))}
        </div>
      )}
    </div>
  );
}
