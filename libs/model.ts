export type VestingItem = {
  vesting_date: string;
  amount: string;
  cumulative_amount: string;
}

export type EquityAward = {
  label: string;
  issue_date: string;
  vesting_manager_name: string;
  vesting_schedule: VestingItem[];
}