export type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  Menu: undefined;
  NotFound: undefined;
  Auth: undefined;
  Contest: undefined;
  '*': undefined;
};

export interface IContest {
  name: string;
  url: string;
  start_time: string;
  end_time: string;
  duration: number;
  site: string;
  in_24_hours: string;
  status: string;
}
