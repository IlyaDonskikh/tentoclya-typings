export enum AINeuralRequestAdapter {
  deepseekReasoner = "deepseek-reasoner",
  deepseekChat = "deepseek-chat",
  openrouterOpenAIGPT5Chat = "openai/gpt-5-chat",
  openrouterOpenAIGPT51Chat = "openai/gpt-5.1-chat",
}

export enum AINeuralRequestType {
  tutorLesson = "tutorLesson",
}

export enum AINeuralRequestStatus {
  created = "created",
  completed = "completed",
  failed = "failed",
}
