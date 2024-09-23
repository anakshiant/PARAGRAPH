import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a jira
 */
const config: IIntegrationConfig = {
  description: 'Sync issues to Jira',
  overviewText: `Connect your Jira Software account to create or update issues in your Jira projects. Increase your team’s productivity by keeping your Jira projects and issues up to date - without manual data entry.
         
Our Jira integration enables you to:
       
• Automatically create or update issues in Jira
• Sync issues from Jira
• Receive updates when issues are created or updated in Jira`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
