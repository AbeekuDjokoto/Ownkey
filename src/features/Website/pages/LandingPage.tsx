import React from 'react';

import { AGENTS_DATA, mockProperties, TAB_DATA } from '@/mocks';
import { AgentsCard, PropertyCard } from '@/shared';
import TabButtons from '@/shared/Tabs/TabButton';
import TabContent from '@/shared/Tabs/TabContent';

import { Header } from '../components';

export function LandingPage() {
  const [activePropertyType, setActivePropertyType] = React.useState(TAB_DATA[0].propertyType);

  return (
    <main className="pt-6 pb-12 flex flex-col gap-20">
      <Header />
      <div className="flex flex-col gap-12">
        <div className="max-w-[672px] w-full mx-auto text-center">
          <h2 className="text-[32px] font-medium">Trusted By a Million Renters and Buyers</h2>
          <p className="text-base text-[#020817]">
            Only ownkey.com connects you to the person who owns or knows the most about a property
            for sale or for rent in Ghana
          </p>
        </div>
      </div>

      {/* Featured Listings */}

      <section className="px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">Featured Listings</h2>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <TabButtons
                activePropertyType={activePropertyType}
                setActivePropertyType={setActivePropertyType}
                tabData={TAB_DATA}
              />

              <div>
                <p>View all</p>
                <div></div>
              </div>
            </div>

            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(324px,1fr))] justify-between gap-[34.5px]">
              <TabContent propertyData={mockProperties} activePropertyType={activePropertyType} />
            </div>
          </div>
        </div>
      </section>

      {/* New Listings */}

      <section className="px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">New Listings</h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(324px,1fr))] justify-between gap-[34.5px]">
          {mockProperties
            .filter((_, index) => index < 4)
            .map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
        </div>
      </section>

      {/* Featured Agents */}

      <section className="px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium">Featured Agents</h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(324px,1fr))] justify-between gap-[34.5px]">
          {AGENTS_DATA.filter((_, index) => index < 4).map((agent) => (
            <AgentsCard key={agent.id} {...agent} />
          ))}
        </div>
      </section>

      {/* Neighbourhoods in accra */}

      <section>
        <div className="max-w-[672px] w-full mx-auto flex flex-col gap-1 text-center">
          <h2 className="text-[32px] font-medium">
            Neighbourhoods in <span className="text-[var(--red-100)]">Accra</span>
          </h2>
          <p>
            Explore residential properties in Ghana, including apartments for rent, houses for sale,
            and studio apartments for Short-stays
          </p>
        </div>
      </section>
    </main>
  );
}
