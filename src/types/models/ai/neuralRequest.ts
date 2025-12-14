export enum AINeuralRequestAdapter {
  deepseekReasoner = "deepseek-reasoner",
  deepseekChat = "deepseek-chat",
  openrouterOpenAIGPT5Chat = "openai/gpt-5-chat",
  openrouterOpenAIGPT51Chat = "openai/gpt-5.1-chat",
}

export enum AINeuralRequestType {
  tutorLesson = "tutorLesson",
  tutorLessonDictionary = "tutorLessonDictionary",
  lexiconLemmaSenseRequest = "lexiconLemmaSenseRequest",
  lexiconSensePairRequest = "lexiconSensePairRequest",
}

export enum AINeuralRequestStatus {
  created = "created",
  completed = "completed",
  failed = "failed",
}

export enum AINeuralRequestTemperature {
  codingMath = 0.0,
  dataCleaningAnalysis = 1.0,
  creativeDataCleaningAnalysis = 1.1,
  generalConversation = 1.3,
  translation = 1.3,
  creativeWritingPoetry = 1.5,
}
