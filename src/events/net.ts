import { IEventInit } from '@useparagon/core/event';

export type EventSchema = {};

const event: IEventInit<EventSchema> = {
  /**
   *  name of event
   */
  name: 'net',

  /**
   * schema of event payload
   */
  schema: {},
};

export default event;
