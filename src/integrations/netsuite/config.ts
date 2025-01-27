import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as Action } from './workflows/action';
import { default as IntegrationRequest } from './workflows/integrationRequest';
import { default as NewWorkflow } from './workflows/newWorkflow';
import { default as NewWorkflow_1 } from './workflows/newWorkflow_1';

/**
 * configuration for a netsuite
 */
const config: IIntegrationConfig = {
  description: 'Sync purchase orders with NetSuite',
  overviewText: `Connect to your NetSuite ERP system to manage your vendors and purchase orders in NetSuite. Increase your team’s productivity by keeping your NetSuite ERP system up to date - without manual data entry.
    
Our NetSuite integration enables you to:
  
• Create or update purchase orders in NetSuite automatically
• Sync vendor information between your app and NetSuite`,
  showWatermark: true,
  workflowDisplayOrder: [
    Action,
    IntegrationRequest,
    NewWorkflow,
    NewWorkflow_1,
  ],
};

export default config;
