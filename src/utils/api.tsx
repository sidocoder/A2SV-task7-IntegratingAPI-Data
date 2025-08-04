import { Opportunity } from "../types/opportunity";

const BASE_URL = "https://akil-backend.onrender.com";


export const fetchOpportunities = async (): Promise<Opportunity[]> => {
  try {
    const response = await fetch('https://akil-backend.onrender.com/opportunities/search', {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch opportunities");
    }

    const result = await response.json();
    return Array.isArray(result) ? result : result.data || [];
  } catch (error) {
    console.error("fetchOpportunities error:", error);
    return [];
  }
};


export const fetchOpportunityById = async (id: string): Promise<Opportunity | null> => {
  try {
    const response = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch opportunity by ID");
    }

    const result = await response.json();
    return result && result.id ? result : result.data || null;
  } catch (error) {
    console.error("fetchOpportunityById error:", error);
    return null;
  }
};
