export enum CoreTutorLevel {
  beginner = "beginner",
  intermediate = "intermediate",
  advanced = "advanced",
}

export enum CoreTutorSubject {
  language = "language",
}

export enum CoreTutorSubjectSectionLanguage {
  en = "en",
  es = "es",
  zhHans = "zhHans",
  zh = "zh",
  ko = "ko",
}

export const CoreTutorSubjectSection = {
  [CoreTutorSubject.language]: CoreTutorSubjectSectionLanguage,
};

// Type that extracts subject section values based on the subject
export type CoreTutorSubjectSectionValue = CoreTutorSubjectSectionLanguage;
