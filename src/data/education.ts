import { EducationEntry } from "@/types/resume_entry";

export const education : EducationEntry[] = [
    {
        title: 'BSc. Software Engineering',
        subtitle: 'The University of the West Indies, Mona Campus',
        startDate: '09/2019',
        endDate: '07/2022',
        grade: 'Degree GPA: 4.03 (3.99 Overall GPA)',
        achievements: [
            'Maintained Dean\'s Honour Roll for all 3 years of study, ultimately graduating with first-class honours.',
        ],
        show: true,
    },
    {
        title: 'Caribbean Advanced Proficiency Examination',
        subtitle: 'Campion College',
        startDate: '2018',
        endDate: '2019',
        subjects: [
            'Grade 1 - UNIT 1 & 2 Computer Science, UNIT 1 & 2 Chemistry, UNIT 1 & 2 Digital Media, UNIT 1 & 2 Biology, Caribbean Studies.',
            'Grade 2 - Communication Studies.',
        ],
        show: true,
    },
    {
        title: 'Caribbean Secondary Education Certificate',
        subtitle: 'Campion College',
        startDate: '2017',
        endDate: '',
        subjects: [
            'Grade 1 - Biology, Chemistry, English A, English B, Information Technology, Physics, Mathematics, Additional Mathematics, Spanish.',
        ],
        show: true,
    },
];
