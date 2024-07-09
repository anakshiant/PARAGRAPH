import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a bamboohr
 */
const config: IIntegrationConfig = {
  description: 'Manage employees, time off, and benefits in BambooHR',
  overviewText: `Connect to your BambooHR account to manage your employees, time off, and benefits in BambooHR. Increase your team’s productivity by keeping your BambooHR account up to date - without manual data entry.
             
Our BambooHR integration enables you to:
                
• Sync employee information in your BambooHR account
• Create employee time off requests in your BambooHR account
• Receive updates when employee information is updated in your BambooHR account`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
