import { ref } from 'vue';

export const firstSemCourses = ref([
    {
      code: 'ITE 10',
      title: 'Introduction to Computing',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      grade: 'ITE',
      pre_requisite: 'None',
      co_requisite: 'None',
    },
    {
      code: 'ITE 11',
      title: 'Mathematical Applications for ITE',
      contact: { total: 4, lec: 3, lab: 1 },
      total: { total: 6, lec: 3, lab: 3 },
      grade: 'ITE',
      pre_requisite: 'None',
      co_requisite: 'None',
    },
    {
      code: 'IS 101',
      title: 'Fundamentals of Information System',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'IS 105',
      title: 'Organization and Management Concepts',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'STS',
      title: 'Science Technology Society',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      grade: '',
      pre_requisite: 'None',
      co_requisite: 'None',
    },
    {
      code: 'PC',
      title: 'Purposive Communication',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      grade: '',
      pre_requisite: 'None',
      co_requisite: 'None',
    },

    {
      code: 'PE 1',
      title: 'Physical Fitness',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      grade: 'PE',
      pre_requisite: 'None',
      co_requisite: 'None',
    },
    {
      code: 'NSTP 1',
      title: 'CWTS/LTS/ROTC 1',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      grade: 'NSTP',
      pre_requisite: 'None',
      co_requisite: 'None',
    },
    {
      code: 'SE 101',
      title: 'Orientation to University Life',
      contact: { total: 0, lec: null, lab: 1.5 },
      total: { total: null, lec: null, lab: null },
      grade: 'SE',
      pre_requisite: 'None',
      co_requisite: 'None',
      course_grade: null
    }
  ]);
  
  export const secondSemCourses = ref([
  
    {
      code: 'CSC 102',
      title: 'Discrete Structures 1',
      contact: { total: 5, lec: 2, lab: 2 },
      total: { total: 3, lec: 2, lab: 1 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'ITE 15',
      title: 'Social Issues and Professional Practices',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'ITE 12',
      title: 'Fundamentals of Programming',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 11',
      co_requisite: 'None'
    },
    
    {
      code: 'EEP 1',
      title: 'English Enhancement Program 1',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    
    {
      code: 'MMW',
      title: 'Mathematics in the Modern World',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
  
    {
      code: 'UTS',
      title: 'Understanding the Self',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'PE 2',
      title: 'Rhythmic Activities',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'NSTP 2',
      title: 'CWTS/LTS/ROTC 2',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'NSTP 1',
      co_requisite: 'None'
    },
    {
      code: 'SE 102',
      title: 'The Elements of Success',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const secondYearFirstSem = ref([
    {
      code: 'ITE 13',
      title: 'Intermediate Programming',
      contact: { total: 4, lec: 4, lab: 0 },
      total: { total: 4, lec: 4, lab: 0 },
      pre_requisite: 'ITE 12',
      co_requisite: 'None'
    },
    {
      code: 'IS 102',
      title: 'IT Infrastructure and Network Technologies',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 10',
      co_requisite: 'None'
    },
    {
      code: 'IS 107',
      title: 'Business Process Management',
      contact: { total: 3, lec:3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'IS 105',
      co_requisite: 'None'
    },
    {
      code: 'IS 100',
      title: 'Fundamentals of Accounting',
      contact: { total: 3, lec:3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'IS 113',
      title: 'IS Innovative and New Technologies',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 }, 
      pre_requisite: 'IS 101',
      co_requisite: 'None'
    },
    {
      code: 'EEP 2',
      title: 'English Enhancement Program 2',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      pre_requisite: 'EEP 1',
      co_requisite: 'None'
    },
    
    {
      code: 'RPH',
      title: 'Readings in the Philippine History',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 }, 
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'PE 3',
      title: 'Individual and Dual Sports',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 }, 
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 103',
      title: 'Intrapersonal and Interpersonal Skills',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0},
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const secondYearSecondSem = ref([
    {
      code: 'ITE 14',
      title: 'Data Structures and Algorithms',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'IS 103',
      title: 'Enterprise Architecture and Information System',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'IS 102',
      co_requisite: 'None'
    },
    {
      code: 'IS 104',
      title: 'Financial Management',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'IS 100',
      co_requisite: 'None'
    },
    {
      code: 'IS 112',
      title: 'IS Strategy, Policy, Management',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'IS 107',
      co_requisite: 'None'
    },
    {
      code: 'IS 109',
      title: 'IS Project Management 1',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'IS 107',
      co_requisite: 'None'
    },
    {
      code: 'EEP 3',
      title: 'English Enhancement Program 3',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      pre_requisite: 'EEP 2',
      co_requisite: 'None'
    },
    {
      code: 'TCW',
      title: 'The Contemporary World',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'PE 4',
      title: 'Major Sports/Team Sports',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 104',
      title: 'Social Responsibility and Accountability',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const thirdYearFirstSem = ref([
    {
      code: 'CSC 106',
      title: 'Software Engineering 1',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'ITE 16',
      title: 'Information Management',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'ITE 18',
      title: 'Applications Development and Emerging Technologies',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
      co_requisite: 'None'
    },
    {
      code: 'IS 106',
      title: 'Quantitaive Methods',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'CSC 102',
      co_requisite: 'None'
    },
    {
      code: 'ArtApp',
      title: 'Art Appreciation',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 }, 
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'GENEL 1',
      title: 'GEC Elective',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'PROFEL 1',
      title: 'Professional Elective 1',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 105',
      title: 'Career Readiness 1',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const thirdYearSecondSem = ref([
    {
      code: 'IS 198',
      title: 'CAPSTONE Project 1',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'CSC 106',
      co_requisite: 'ITE 17'
    },
    {
      code: 'ITE 17',
      title: 'ITE Technopreneurship',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'CSC 106',
      co_requisite: 'None'
    },
    {
      code: 'IT 101',
      title: 'Human Computer Interaction',
      contact: { total: 1, lec: 0, lab: 1 },
      total: { total: 3, lec: 0, lab: 3 },
      pre_requisite: 'ITE 16',
      co_requisite: 'None'
    },
    {
      code: 'IS 111',
      title: 'Evaluation of Business Performance',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'IT 108',
      co_requisite: 'None'
    },
    {
      code: 'ETH',
      title: 'Ethics',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'LWR',
      title: 'Life and Works of Rizal',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'PROFEL 2',
      title: 'Professional Elective 2',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 106',
      title: 'Career Readiness 3',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const fourthYearFirstSem = ref([
    {
      code: 'ITE 19',
      title: 'ITE Competency Appraisal',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: 1.5, lab: null }, 
      pre_requisite: 'ITE 14',
      co_requisite: 'None'
    },
    {
      code: 'IS 199',
      title: 'CAPSTONE Project 2',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'IS 198',
      co_requisite: 'ITE 17'
    },
    {
      code: 'IS 106',
      title: 'Business Intelligence',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'IT 106',
      co_requisite: 'None'
    },
    {
      code: 'PROFEL 3',
      title: 'Professional Elective 3',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
   
    {
      code: 'PROFEL 4',
      title: 'Professional Elective 4',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 107',
      title: 'Pre-Employment Seminar 1',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: null, lab: null },
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const fourthYearSecondSem = ref([
    {
      code: 'IS 197',
      title: 'OJT/Practicum',
      contact: { total: 3, lec: null, lab: null },
      total: { total: 320, lec: null, lab: null }, 
      pre_requisite: 'IT 198',
      co_requisite: 'None'
    },
   
    {
      code: 'SE 108',
      title: 'Pre-Employment Seminar 2',
      contact: { total: 0, lec: null, lab: null },
      total: { total: 1.5, lec: 1.5, lab: null }, 
      pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);