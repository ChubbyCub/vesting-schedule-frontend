import type { NextApiRequest, NextApiResponse } from 'next'
import { mockEquityAwards } from '../../fixtures/mockData';
import { formatDate, formatNumShares } from '../../libs/helpers';
import { EquityAward, VestingItem } from '../../libs/model';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mockResponse: EquityAward[] = mockEquityAwards.map((award) => {
    const vesting_schedule = award.vesting_schedule.map((item) => {
      return {
        ...item,
        vesting_date: formatDate(item.vesting_date),
        amount: formatNumShares(item.amount),
        cumulative_amount: formatNumShares(item.cumulative_amount)}
    });

    return {...award, vesting_schedule}
  });
  res.status(200).json(mockResponse);
}
