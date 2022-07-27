import { Tab } from '@headlessui/react';
import type { NextPage } from 'next';
import { classNames } from '../libs/helpers';
import { VestingSchedule } from '../components/VestingSchedule';
import { useAwards } from '../libs/hooks/useAwards';
import { EquityAward } from '../libs/model';

const Home: NextPage = () => {
  const { data, isLoading, isError } = useAwards();

  if (isError) {
    return <div>Failed to load data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const equityAwards = data as EquityAward[];

  return (
    <div className="w-auto font-sans p-10">
      <Tab.Group>
        <Tab.List className="flex space-x-10 p-1">
          {equityAwards.map((award) => (
            <Tab
              key={award.label}
              className={({ selected }) =>
                classNames(
                  'py-2.5 text-md font-medium leading-5 text-blue-700',
                  selected
                    ? 'underline underline-offset-8 decoration-4 focus:outline-none'
                    : 'text-blue-100'
                )
              }
            >
              {award.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          {equityAwards.map((award) => (
            <Tab.Panel
              key={award.label}
              className='bg-white w-full'
            >
              <header className='font-bold mt-4 mb-9'>{award.vesting_manager_name}</header>
              <VestingSchedule schedule={award.vesting_schedule} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Home
