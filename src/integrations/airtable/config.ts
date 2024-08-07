import { IIntegrationConfig } from '@useparagon/core/integration';

/**
 * configuration for a airtable
 */
const config: IIntegrationConfig = {
  description: 'Sync data with Airtable',
  overviewText: `Connect to your Airtable account to manage your bases and records in Airtable. Increase your team’s productivity by keeping your Airtable account up to date - without manual data entry.  
  
Our Airtable integration enables you to:   
   
• Create or update records in your Airtable bases
• Sync records from your Airtable bases
• Receive webhooks when records are created or updated in your Airtable bases`,
  showWatermark: true,
  workflowDisplayOrder: [],
};

export default config;
