import {
  EventStep,
  FanOutStep,
  FunctionStep,
  Workflow,
} from '@useparagon/core';
import { IContext } from '@useparagon/core/execution';
import { IPersona } from '@useparagon/core/persona';
import { ConditionalInput } from '@useparagon/core/steps/library/conditional';
import { IConnectUser, IPermissionContext } from '@useparagon/core/user';
import {
  createInputs,
  INetsuiteIntegration,
  InputResultMap,
} from '@useparagon/integrations/netsuite';

import event from '../../../events/net';
import personaMeta from '../../../persona.meta';

/**
 * action Workflow implementation
 */
export default class extends Workflow<
  INetsuiteIntegration,
  IPersona<typeof personaMeta>,
  InputResultMap
> {
  /**
   * Define workflow steps and orchestration.
   */
  define(
    integration: INetsuiteIntegration,
    context: IContext<InputResultMap>,
    connectUser: IConnectUser<IPersona<typeof personaMeta>>,
  ) {
    const triggerStep = new EventStep(event);

    const functionStep = new FunctionStep({
      autoRetry: false,
      description: 'description',
      code: function yourFunction(parameters, libraries) {
        return new Array(50).fill(1);
      },
      parameters: {},
    });

    const mapStep = new FanOutStep({
      description: 'description',
      iterator: functionStep.output.result,
    });

    const actionStep = integration.actions.getVendorById(
      {
        vendorFilterFormula: undefined,
        recordType: 'vendor',
        vendorId: `5524`,
      },
      {
        autoRetry: false,
        continueWorkflowOnError: false,
        description: 'description',
      },
    );

    triggerStep.nextStep(functionStep).nextStep(mapStep.branch(actionStep));

    /**
     * Pass all steps used in the workflow to the `.register()`
     * function. The keys used in this function must remain stable.
     */
    return this.register({ triggerStep, functionStep, mapStep, actionStep });
  }

  /**
   * The name of the workflow, used in the Dashboard and Connect Portal.
   */
  name: string = 'action';

  /**
   * A user-facing description of the workflow shown in the Connect Portal.
   */
  description: string = 'Add a user-facing description of this workflow';

  /**
   * Define workflow-level User Settings. For integration-level User
   * Settings, see ../config.ts.
   * https://docs.useparagon.com/connect-portal/workflow-user-settings
   */
  inputs = createInputs({});

  /**
   * If set to true, the workflow will appear as enabled by default once
   * a user connects their account to the integration.
   * https://docs.useparagon.com/connect-portal/displaying-workflows#default-to-enabled
   */
  defaultEnabled: boolean = false;

  /**
   * If set to true, the workflow will be hidden from all users from the
   * Connect Portal.
   * https://docs.useparagon.com/connect-portal/displaying-workflows#hide-workflow-from-portal-for-all-users
   */
  hidden: boolean = false;

  /**
   * You can restrict the visibility of this workflow to specific users
   * with Workflow Permissions.
   * https://docs.useparagon.com/connect-portal/workflow-permissions
   */
  definePermissions(
    connectUser: IPermissionContext<IPersona<typeof personaMeta>>,
  ): ConditionalInput | undefined {
    return undefined;
  }

  /**
   * This property is maintained by Paragon. Do not edit this property.
   */
  readonly id: string = '9226b77e-6727-4402-93bf-873bd05ca1e9';
}
