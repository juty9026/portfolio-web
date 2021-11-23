import { Moment } from 'moment';

export interface AboutMeData {
  subject: string;
  items: string[];
}

export interface IntroductionData {
  content: string;
}

export interface AbilityData {
  subject: string;
  content: string;
}

export interface WorkExperienceData {
  projects: [
    {
      name: string;
      partner: string;
      period: {
        start: Moment;
        end: Moment;
      };
      techStacks: string[];
      roles: string[];
      comments: string[];
    }
  ];
}
