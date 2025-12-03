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
  "zh-Hans" = "zh-Hans",
  "zh-Hant" = "zh-Hant",
  "ar-AE" = "ar-AE",
  "ar-SA" = "ar-SA",
  ko = "ko",
  ja = "ja",
  hi = "hi",
  fr = "fr",
  de = "de",
  es = "es",
}

export const CoreTutorSubjectSection = {
  [CoreTutorSubject.language]: CoreTutorSubjectSectionLanguage,
};

// Type that extracts subject section values based on the subject
export type CoreTutorSubjectSectionValue = CoreTutorSubjectSectionLanguage;
