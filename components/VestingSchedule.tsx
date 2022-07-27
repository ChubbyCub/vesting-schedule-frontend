import React from 'react';
import { VestingItem } from '../libs/model';
import { v4 as uuidv4 } from 'uuid';

interface VestingScheduleProps {
  schedule: VestingItem[];
}

export const VestingSchedule: React.FC<VestingScheduleProps> = ({ schedule }) => {
  return (
    <table className='w-full table-auto'>
      <thead className='text-left'>
        <tr>
          <th>Vesting date</th>
          <th>Shares vesting</th>
          <th>Cumulative shares vested</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item) => {
          return (
            <tr key={uuidv4()}>
              <td>{item.vesting_date}</td>
              <td>{item.amount}</td>
              <td>{item.cumulative_amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}