import { fetchOpportunityById } from '../../../utils/api';  // Adjust relative path as needed
import Description from '../../../components/Description';  // Your Description component
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function OpportunityPage({ params }: Props) {
  const { id } = params;

  const opportunity = await fetchOpportunityById(id);

  if (!opportunity) {
    notFound();  
  }

  return <Description opp={opportunity} />;
}
