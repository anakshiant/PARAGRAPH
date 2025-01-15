import { IIntegrationConfig } from '@useparagon/core/integration';

import { default as NewWorkflow } from './workflows/newWorkflow';

/**
 * configuration for a amazons3
 */
const config: IIntegrationConfig = {
  description: 'Connect your Amazon S3 bucket',
  overviewText: `Connect to your Amazon S3 account to manage your buckets, objects, and jobs in Amazon S3. Increase your team’s productivity by keeping your Amazon S3 account up to date - without manual data entry.
              
Our Amazon S3 integration enables you to:
           
• Sync buckets in your Amazon S3 account 
• Create and update buckets, objects and jobs in your Amazon S3 account`,
  showWatermark: true,
  workflowDisplayOrder: [NewWorkflow],
};

export default config;
