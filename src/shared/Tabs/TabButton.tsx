import { cn } from '@/libs/cn';

export default function TabButtons({
  tabData,
  activePropertyType,
  setActivePropertyType,
}: {
  tabData: any;
  activePropertyType: string;
  setActivePropertyType: (propertyType: string) => void;
}) {
  return (
    <div className="flex gap-2 text-base text-[var(--black-100)]">
      {tabData.map((item: any) => (
        <p
          className={cn(
            `py-3 px-4 ${item.propertyType === activePropertyType && 'border-b-4 border-b-[var(--red-100)]'}`,
          )}
          key={item.id}
          onClick={() => setActivePropertyType(item.propertyType)}>
          {item.propertyType}
        </p>
      ))}
    </div>
  );
}
