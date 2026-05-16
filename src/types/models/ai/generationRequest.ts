export enum AIGenerationRequestAdapter {
  deepseekReasoner = "deepseek-reasoner",
  deepseekChat = "deepseek-chat",
  openrouterOpenAIGPT5Chat = "openai/gpt-5-chat",
  openrouterOpenAIGPT51Chat = "openai/gpt-5.1-chat",
  openrouterOpenAIGPT55 = "openai/gpt-5.5",
  openAIImage = "openai-image",
  openAITTS = "openai-tts",
}

export enum AIGenerationRequestModality {
  text = "text",
  image = "image",
  audio = "audio",
}

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
