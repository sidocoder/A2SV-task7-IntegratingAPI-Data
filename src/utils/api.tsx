import { Opportunity } from "../types/opportunity";

const BASE_URL = "https://akil-backend.onrender.com";

export const fetchOpportunities = async (): Promise<Opportunity[]> => {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/search`);
    if (!response.ok) throw new Error("Failed to fetch opportunities");

    const result = await response.json();
    return Array.isArray(result) ? result : result.data;
  } catch (error) {
    console.error("fetchOpportunities error:", error);
    return [];
  }
};

export const fetchOpportunityById = async (id: string): Promise<Opportunity | null> => {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/${id}`);
    if (!response.ok) throw new Error("Failed to fetch opportunity by ID");

    const result = await response.json();
    return result && result.id ? result : result.data && result.data.id ? result.data : null;
  } catch (error) {
    console.error("fetchOpportunityById error:", error);
    return null;
  }
};
