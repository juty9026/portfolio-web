import { WorkExperienceData } from '@types';

const data: WorkExperienceData = {
  projects: [
    {
      seq: 1,
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
      seq: 2,
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
    {
      seq: 3,
      name: 'SHP',
      partner: '호텔신라',
      period: {
        start: '2019-02-08',
        end: '2019-05-31',
      },
      techStack: {
        backend: ['JSP', 'Spring', 'MyBatis', 'Oracle'],
      },
      roles: ['Front-End 개발 및 유지보수'],
      achievements: [],
      comment: 'Comment C',
    },
    {
      seq: 4,
      name: 'IDCube',
      partner: 'SK C&C',
      period: {
        start: '2019-07-22',
        end: '2020-04-17',
      },
      techStack: {
        backend: ['Spring Boot', 'JPA', 'MariaDB'],
        frontend: ['Angular2'],
      },
      roles: ['Front-End 개발', 'Back-End 개발'],
      achievements: [
        '응답이 느린 api를 작게 분리해 개별 Loading으로 변경하고, 상황에 따라 필요하지 않은 api 호출 제거',
        '메뉴 이동 시 pending 상태인 request를 cancellation하기 위해 공통 api 모듈 수정',
      ],
      comment: 'Comment B',
    },
    {
      seq: 5,
      name: 'WDP',
      partner: 'SK C&C',
      period: {
        start: '2020-04-20',
        end: '2020-05-29',
      },
      techStack: {
        frontend: ['React'],
      },
      roles: ['Front-End 개발'],
      achievements: ['컴포넌트 구조 리팩토링', '공통 컴포넌트 개발', 'npm package 커스터마이징'],
      comment: 'Comment B',
    },
    {
      seq: 6,
      name: 'HAPP',
      partner: 'SK C&C',
      period: {
        start: '2020-06-08',
        end: '2020-11-30',
      },
      techStack: {
        backend: ['JSP'],
        frontend: ['React Native', 'jQuery'],
      },
      roles: ['Front-End 개발'],
      achievements: [
        '안드로이드 개발자와 협업하여 React Native 작업',
        'Android / iOS WebView에서 발생하는 이슈 처리',
        'Chrome 렌더링 Layout / Reflow 성능 이슈 개선 : 120초 → 2초',
      ],
      comment: 'Comment B',
    },
    {
      seq: 7,
      name: '5GX Cloud',
      partner: 'SK C&C',
      period: {
        start: '2020-12-01',
        end: '2021-01-29',
      },
      techStack: {
        backend: ['Spring Boot', 'MyBatis', 'MariaDB'],
        frontend: ['Vue'],
      },
      roles: ['Front-End 개발', 'Back-End 개발'],
      achievements: ['공통로직 분리 리팩토링 및 Directive, Filter 개발', 'Line & Area / Donut Chart 개발 (vue-d3)'],
      comment: 'Comment B',
    },
    {
      seq: 8,
      name: '오픈몰',
      partner: '오픈잇',
      period: {
        start: '2021-02-01',
        end: '2021-04-02',
      },
      techStack: {
        backend: ['Spring Boot', 'MyBatis', 'MariaDB'],
        frontend: ['React'],
      },
      roles: ['Front-End 개발 리딩👑', 'Back-End 개발'],
      achievements: ['Naming Convention / ESLint & Prettier + husky pre-commit 도입', 'React Hook / Context API'],
      comment: 'Comment B',
    },
    {
      seq: 9,
      name: 'SK C&C',
      partner: 'WDP',
      period: {
        start: '2021-04-03',
        end: '2021-04-30',
      },
      techStack: {
        frontend: ['React'],
      },
      roles: ['Front-End 개발'],
      achievements: ['Video Player 컴포넌트 개발 (video-react 커스터마이징)'],
      comment: 'Comment B',
    },
    {
      seq: 10,
      name: '5GX Cloud',
      partner: 'SK C&C',
      period: {
        start: '2021-05-03',
        end: '2021-11-05',
      },
      techStack: {
        backend: ['Spring Boot', 'MyBatis', 'MariaDB'],
        frontend: ['Vue'],
      },
      roles: ['Front-End 개발', 'Back-End 개발'],
      achievements: ['공통로직 분리 리팩토링 및 Directive, Filter 개발', 'npm package 커스터마이징 (patch-package)'],
      comment: 'Comment B',
    },
    {
      seq: 11,
      name: '오픈몰',
      partner: '오픈잇',
      period: {
        start: '2021-10-13',
        end: '2021-10-29',
      },
      techStack: {
        backend: ['Spring Boot', 'MyBatis', 'MariaDB'],
        frontend: ['React'],
      },
      roles: ['Front-End 개발'],
      achievements: ['Rest Template → Feign 전환'],
      comment: '페이지 접근 시 사용자가 기다리지 않아도 되는 작업을 Async 로 전환하여 사용자 경험 개선',
    },
    {
      seq: 12,
      name: '통합 시스템',
      partner: '쥬비스',
      period: {
        start: '2021-11-01',
        end: '현재',
      },
      techStack: {
        backend: ['JSP', 'MyBatis', 'MySQL'],
        frontend: ['AngularJS'],
      },
      roles: ['Front-End 개발', 'Back-End 개발'],
      achievements: ['쿠폰 입력 화면 개발'],
      comment: 'Comment B',
    },
  ],
};

export default data;
