import { WorkExperienceData } from '@types';

const data: WorkExperienceData = {
  projects: [
    {
      name: 'TANGO-D',
      partner: 'SK C&C',
      period: {
        start: '2018-02-01',
        end: '2018-05-31',
      },
      techStack: {
        backend: ['Hadoop', 'Hive', 'Spring'],
      },
      roles: ['데이터 수집 어플리케이션 운영', '데이터 수집 인터페이스 개발', '데이터 수집 모니터링 및 재처리'],
      achievements: [],
      comment: 'Comment A',
    },
    {
      name: 'LCAP',
      partner: 'SK Telecom',
      period: {
        start: '2018-08-01',
        end: '2019-01-31',
      },
      techStack: {
        backend: ['Kafka', 'Redis', 'Hadoop'],
      },
      roles: ['데이터 수집 어플리케이션 운영', '데이터 수집 모니터링'],
      achievements: ['매일 수집 결과를 간단하게 요약해주는 shell script를 작성하여 업무효율 향상'],
      comment: 'Comment B',
    },
  ],
};

export default data;
