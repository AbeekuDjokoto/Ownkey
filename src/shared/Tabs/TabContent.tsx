import { PropertyData } from '@/types';

import { PropertyCard } from '../PropertyCard';

export default function TabContent({
  propertyData,
  activePropertyType,
}: {
  propertyData: PropertyData[];
  activePropertyType: string;
}) {
  const filteredPropertyData = propertyData
    .filter((item: PropertyData) => item.propertyType === activePropertyType)
    .slice(0, 4);

  return (
    <>
      {filteredPropertyData.map((item: PropertyData) => (
        <PropertyCard key={item.id} {...item} />
      ))}
    </>
  );
}
