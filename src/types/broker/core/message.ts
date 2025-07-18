export interface CoreMessageCreatedPayload {
  message: {
    uuid: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
