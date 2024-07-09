import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a emarsys
 */
const config: IIntegrationConfig = {
  description: 'Connect your Emarsys account',
  overviewText: `Connect to your Emarsys account to manage your contacts, segments, and campaigns in Emarsys. Increase your team’s productivity by keeping your Emarsys account up to date - without manual data entry.

Our Emarsys integration enables you to:
       
• Automatically create or update records in Emarsys
• Sync contacts and segments from Emarsys
• Receive updates when a record in Emarsys is created or updated`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
