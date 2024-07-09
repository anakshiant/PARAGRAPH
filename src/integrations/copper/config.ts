import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a copper
 */
const config: IIntegrationConfig = {
  description: 'Sync records from Copper',
  overviewText: `Connect to your Copper account to manage their opportunities, people, and leads in Copper. Increase your team’s productivity by keeping your Copper account up to date - without manual data entry.
    
Our Copper integration enables you to:
    
• Create or update records in your Copper account
• Sync records from your Copper account
• Receive webhooks when records are created or updated in your Copper account`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
