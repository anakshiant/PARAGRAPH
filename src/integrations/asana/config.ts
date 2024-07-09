import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a asana
 */
const config: IIntegrationConfig = {
  description: 'Connect to your users’ Asana accounts',
  overviewText: `Connect to your users’ Asana account to access, create, and update their tasks or projects in Asana.  
  
Paragon enables you to sync data between your app and your users’ Asana accounts, for example:   
   
• Create or update tasks in your users’ Asana projects
• Sync tasks from your users’ Asana projects
• Receive webhooks when tasks are created or updated in your users’ Asana projects`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
