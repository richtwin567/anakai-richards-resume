export interface ResumeEntry {
    title: string;
    subtitle?: string;
    startDate?: string;
    endDate?: string;
    achievements?: string[];
    show: boolean;
}

export interface EducationEntry extends ResumeEntry {
    subjects?: string[];
    grade?: string;
}

export function isEducationEntry(entry: ResumeEntry): entry is EducationEntry {
    return (entry as EducationEntry).subjects !== undefined || (entry as EducationEntry).grade !== undefined;
}
