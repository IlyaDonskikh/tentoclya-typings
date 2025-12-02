import {
  AINeuralRequestAdapter,
  AINeuralRequestStatus,
  AINeuralRequestType,
} from "../../models";

export interface BrokerCoreTutorLessonCreatedPayload {
  neuralRequest: CoreTutorLesson;
}

interface CoreTutorLesson {
  uuid: string;
  adapter: AINeuralRequestAdapter;
  type: AINeuralRequestType;
  requestPrompt: string;
  responseSchema?: string;
}
