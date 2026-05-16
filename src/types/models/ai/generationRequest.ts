export enum AIGenerationRequestAdapter {
  deepseekReasoner = "deepseek-reasoner",
  deepseekChat = "deepseek-chat",
  openrouterOpenAIGPT5Chat = "openai/gpt-5-chat",
  openrouterOpenAIGPT51Chat = "openai/gpt-5.1-chat",
  openrouterOpenAIGPT55 = "openai/gpt-5.5",
  openrouterOpenAIGPTImage1 = "openai/gpt-image-1",
  openrouterOpenAIGPT4OMiniTTS = "openai/gpt-4o-mini-tts-2025-12-15",
}

export enum AIGenerationRequestModality {
  text = "text",
  image = "image",
  audio = "audio",
}

export type AIGenerationRequestTextAdapter =
  | AIGenerationRequestAdapter.deepseekReasoner
  | AIGenerationRequestAdapter.deepseekChat
  | AIGenerationRequestAdapter.openrouterOpenAIGPT5Chat
  | AIGenerationRequestAdapter.openrouterOpenAIGPT51Chat
  | AIGenerationRequestAdapter.openrouterOpenAIGPT55;

export type AIGenerationRequestImageAdapter =
  AIGenerationRequestAdapter.openrouterOpenAIGPTImage1;

export type AIGenerationRequestAudioAdapter =
  AIGenerationRequestAdapter.openrouterOpenAIGPT4OMiniTTS;

export interface AIGenerationRequestAdapterByModality {
  [AIGenerationRequestModality.text]: AIGenerationRequestTextAdapter;
  [AIGenerationRequestModality.image]: AIGenerationRequestImageAdapter;
  [AIGenerationRequestModality.audio]: AIGenerationRequestAudioAdapter;
}

export type AIGenerationRequestAdapterForModality<
  M extends AIGenerationRequestModality,
> = AIGenerationRequestAdapterByModality[M];

export enum AIGenerationRequestType {
  course = "course",
  tutorLesson = "tutorLesson",
  tutorLessonDictionary = "tutorLessonDictionary",
  lexiconLemmaSenseRequest = "lexiconLemmaSenseRequest",
  lexiconSensePairRequest = "lexiconSensePairRequest",
  tutorLessonIllustration = "tutorLessonIllustration",
  tutorLessonNarration = "tutorLessonNarration",
  messageAttachmentImage = "messageAttachmentImage",
}

export enum AIGenerationRequestStatus {
  created = "created",
  completed = "completed",
  failed = "failed",
}

export enum AIGenerationArtifactKind {
  image = "image",
  audio = "audio",
}

export enum AIGenerationArtifactMimeType {
  imageJPEG = "image/jpeg",
  imagePNG = "image/png",
  imageWEBP = "image/webp",
  audioMPEG = "audio/mpeg",
  audioOGG = "audio/ogg",
  audioWAV = "audio/wav",
}
