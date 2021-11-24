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

export interface ProjectData {
  seq: number;
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
}
export interface WorkExperienceData {
  projects: ProjectData[];
}

export type Backend =
  | 'Hadoop'
  | 'Hive'
  | 'Kafka'
  | 'Redis'
  | 'Oracle'
  | 'MySQL'
  | 'MariaDB'
  | 'MyBatis'
  | 'Java'
  | 'JPA'
  | 'JSP'
  | 'Spring'
  | 'Spring Boot';
export type Frontend = 'Javascript' | 'ES6+' | 'React' | 'Vue' | 'AngularJS' | 'Angular2' | 'React Native' | 'jQuery';
export type DevOps = 'Jenkins' | 'Grafana' | 'AWS';
