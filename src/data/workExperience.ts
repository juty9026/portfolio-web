import moment from 'moment';
import constants from '@constants';
import { WorkExperienceData } from '@types';

const data: WorkExperienceData = {
  projects: [
    {
      name: 'TANGO-D',
      partner: constants.PARTNER_SKCC,
      period: {
        start: moment('2018-02-01'),
        end: moment('2018-05-31'),
      },
      techStacks: [constants.TECH_STACK_JAVA],
      roles: ['데이터 수집 어플리케이션 운영', '데이터 수집 인터페이스 개발', '데이터 수집 모니터링 및 재처리F'],
      comments: [''],
    },
  ],
};

export default data;
