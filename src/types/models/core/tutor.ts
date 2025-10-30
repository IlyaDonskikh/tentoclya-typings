export enum CoreTutorLevel {
  beginner = "beginner",
  intermediate = "intermediate",
  advanced = "advanced",
}

export enum CoreTutorSubject {
  language = "language",
}

enum CoreTutorSubjectSectionLanguage {
  en = "en",
  es = "es",
  zhHans = "zh-Hans",
  zh = "zh",
  ko = "ko",
}

export const CoreTutorSubjectSection = {
  [CoreTutorSubject.language]: CoreTutorSubjectSectionLanguage,
};

// Type that extracts subject section values based on the subject
export type CoreTutorSubjectSectionValue = CoreTutorSubjectSectionLanguage;
