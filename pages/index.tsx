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
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {equityAwards.map((award) => (
            <Tab
              key={award.label}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {award.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {equityAwards.map((award) => (
            <Tab.Panel
              key={award.label}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <VestingSchedule schedule={award.vesting_schedule} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default Home
