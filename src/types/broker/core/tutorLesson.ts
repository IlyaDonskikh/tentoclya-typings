import { AINeuralRequestAdapter, AINeuralRequestType } from "../../models";

export interface BrokerCoreTutorLessonCreatedPayload {
  tutorLesson: CoreTutorLesson;
}

interface CoreTutorLesson {
  uuid: string;
  adapter: AINeuralRequestAdapter;
  type: AINeuralRequestType;
  requestPrompt: string;
  responseSchema?: string;
}
