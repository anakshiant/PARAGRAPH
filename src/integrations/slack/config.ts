import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as Heyyo } from './workflows/heyyo';
import { default as NewWorkflow } from './workflows/newWorkflow';
import { default as NewWorkflow_1 } from './workflows/newWorkflow_1';

/**
 * configuration for a slack
 */
const config: IIntegrationConfig = {
  description: "A description for the integration's purpose.",
  overviewText: "A long-form description for the integration's purpose.",
  showWatermark: true,
  workflowDisplayOrder: [Heyyo, NewWorkflow, NewWorkflow_1],
};

export default config;
