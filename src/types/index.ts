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
  projects: {
    name: string;
    partner: string;
    period: {
      start: string;
      end: string;
    };
    techStack: {
      [key: string]: Backend[] | Frontend[] | DevOps[] | undefined;
      backend?: Backend[];
      frontend?: Frontend[];
      devops?: DevOps[];
    };
    roles: string[];
    achievements: string[];
    comment?: string;
  }[];
}

export type Backend = 'Hadoop' | 'Hive' | 'Kafka' | 'Redis' | 'Java' | 'Spring' | 'Spring Boot';
export type Frontend = 'Javascript' | 'ES6+' | 'React' | 'Vue';
export type DevOps = 'Jenkins' | 'Grafana' | 'AWS';
