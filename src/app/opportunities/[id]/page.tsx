import Description from '@/components/Description';
import { Opportunity } from '@/types/opportunity';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

export default async function OpportunityDetailsPage({ params }: PageProps) {
  const { id } = params;

  const res = await fetch(`https://akil-backend.onrender.com/opportunities/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    return notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to load opportunity (${res.status})`);
  }

  const opportunity: Opportunity = await res.json();

  return <Description opp={opportunity} />;
}
