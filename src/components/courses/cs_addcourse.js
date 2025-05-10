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
      code: 'ITE 15',
      title: 'Social Issues and Professional Practice',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      grade: 'ITE',
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
      code: 'STS',
      title: 'Science Technology Society',
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
      code: 'Math 13',
      title: 'Calculus I',
      contact: { total: 4, lec: 4, lab: 0 },
      total: { total: 4, lec: 4, lab: 0 },
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
      code: 'EC',
      title: 'Effective Communication',
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
      code: 'Math A',
      title: 'Calculus Enhancement Program',
      contact: { total: 2, lec: 2, lab: 0, isParenthetical: true },
      total: { total: 2, lec: 2, lab: 0, isParenthetical: true },
      pre_requisite: 'None',
      co_requisite: 'Math 13'
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
      code: 'Math 14',
      title: 'Calculus II',
      contact: { total: 4, lec: 4, lab: 0 },
      total: { total: 4, lec: 4, lab: 0 },
      pre_requisite: 'Math 13',
      co_requisite: 'None'
    },
    {
      code: 'ITE 13',
      title: 'Intermediate Programming',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 12',
      co_requisite: 'None'
    },
    {
      code: 'CSC 102',
      title: 'Discrete Structures 1',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'WC',
      title: 'Workplace Communication',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 }, 
      pre_requisite: 'EEP 1',
      co_requisite: 'None'
    },
    {
      code: 'RPH',
      title: 'Readings in the Philippine History',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'Phys 20',
      title: 'Physics for Engineers',
      contact: { total: 4, lec: 3, lab: 1 },
      total: { total: 6, lec: 3, lab: 3 },
      pre_requisite: 'Math 13',
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
      code: 'Phys B',
      title: 'Physics Enhancement Program for Engineers',
      contact: { total: 2, lec: 2, lab: 0 },
      total: { total: 2, lec: 2, lab: 0},
      pre_requisite: 'None',
      co_requisite: 'None'
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
  
  export const secondYearSecondSem = ref([
    {
      code: 'ITE 14',
      title: 'Data Structures and Algorithms',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
      co_requisite: 'None'
    },
    {
      code: 'CSC 104',
      title: 'Object-oriented Programming',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
      co_requisite: 'None'
    },
    {
      code: 'ITE 16',
      title: 'Information Management',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
      co_requisite: 'None'
    },
    {
      code: 'CSC 103',
      title: 'Discrete Structures 2',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'CSC 102',
      co_requisite: 'None'
    },
    {
      code: 'CSC 106',
      title: 'Software Engineering 1',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
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
      code: 'ITE 18',
      title: 'Applications Development and Emerging Technologies',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 13',
      co_requisite: 'None'
    },
    {
      code: 'CSC 107',
      title: 'Software Engineering 2',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'CSC 106',
      co_requisite: 'None'
    },
    {
      code: 'CSC 108',
      title: 'Algorithms and Complexity',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 14, Math 14',
      co_requisite: 'None'
    },
    {
      code: 'CSC 105',
      title: 'Architecture and Organization',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 14',
      co_requisite: 'None'
    },
    {
      code: 'IT 107',
      title: 'Information Assurance and Security 1',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'ITE 16',
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
      code: 'Eth',
      title: 'Ethics',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'None',
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
      code: 'ITE 17',
      title: 'ITE Technopreneurship',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
       pre_requisite: 'CSC 106',
      co_requisite: 'None'
    },
    {
      code: 'ITE 19',
      title: 'ITE Competency Appraisal',
      contact: { total: 1, lec: 0, lab: 1 },
      total: { total: 3, lec: 0, lab: 3 },
       pre_requisite: 'ITE 14',
      co_requisite: 'None'
    },
    {
      code: 'CSC 109',
      title: 'Automata Theory and Formal Languages',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'CSC 108',
      co_requisite: 'None'
    },
    {
      code: 'CSC 198',
      title: 'Thesis 1',
      contact: { total: 3, lec: 3, lab: 0 },
      total: { total: 3, lec: 3, lab: 0 },
      pre_requisite: 'CSC 108',
      co_requisite: 'None'
    },
    {
      code: 'CSC 110',
      title: 'Operating System',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
      pre_requisite: 'CSC 105',
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
      code: 'PROFEL 2',
      title: 'Professional Elective 2',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
       pre_requisite: 'None',
      co_requisite: 'None'
    },
    {
      code: 'SE 106',
      title: 'Career Readiness 2',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
       pre_requisite: 'None',
      co_requisite: 'None'
    }
  ]);
  
  export const fourthYearFirstSem = ref([
    {
      code: 'CSC 112',
      title: 'Programming Languages',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 1 }, 
       pre_requisite: 'ITE 14',
      co_requisite: 'None'
    },
    {
      code: 'CSC 199',
      title: 'Thesis 2',
      contact: { total: 3, lec: null, lab: null },
      total: { total: null, lec: null, lab: null },
       pre_requisite: 'CSC 198',
      co_requisite: 'None'
    },
    {
      code: 'CSC 113',
      title: 'Networks and Communications',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 1 },
       pre_requisite: 'CSC 113',
      co_requisite: 'None'
    },
    {
      code: 'IT 101',
      title: 'Human Computer Interaction',
      contact: { total: 3, lec: 2, lab: 1 },
      total: { total: 5, lec: 2, lab: 3 },
       pre_requisite: 'ITE 16',
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
      code: 'CSC 198',
      title: 'OJT/Practicum',
      contact: { total: 3, lec: null, lab: null },
      total: { total: 320, lec: null, lab: null }, 
       pre_requisite: 'CSC 198',
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