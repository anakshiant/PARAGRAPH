import {
  ConditionalStep,
  CronStep,
  FunctionStep,
  Workflow,
} from '@useparagon/core';
import { IContext } from '@useparagon/core/execution';
import * as Operators from '@useparagon/core/operator';
import { IPersona } from '@useparagon/core/persona';
import { ConditionalInput } from '@useparagon/core/steps/library/conditional';
import { IConnectUser, IPermissionContext } from '@useparagon/core/user';
import {
  createInputs,
  INetsuiteIntegration,
  InputResultMap,
} from '@useparagon/integrations/netsuite';

import personaMeta from '../../../persona.meta';

/**
 * New Workflow Workflow implementation
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
    const triggerStep = new CronStep({
      cron: '0 0 9 */1 * *',
      timeZone: 'America/Los_Angeles',
    });

    const functionStep = new FunctionStep({
      autoRetry: false,
      description: 'description',
      code: function yourFunction(parameters, libraries) {
        return true;
      },
      parameters: {},
    });

    const inboundStep = new ConditionalStep({
      if: Operators.BooleanFalse(functionStep.output.result),
      description: 'inbound?',
    });

    const functionStep1 = new FunctionStep({
      autoRetry: false,
      description: 'parse inbound webhook',
      code: function yourFunction(parameters, libraries) {},
      parameters: {},
    });

    const ifelseStep = new ConditionalStep({
      if: Operators.BooleanTrue(functionStep.output.result),
      description: 'is customer language set?',
    });

    const functionStep2 = new FunctionStep({
      autoRetry: false,
      description: 'customer language no',
      code: function yourFunction(parameters, libraries) {},
      parameters: {},
    });

    const functionStep3 = new FunctionStep({
      autoRetry: false,
      description: 'customer language resolving',
      code: function yourFunction(parameters, libraries) {},
      parameters: {},
    });

    const ifelseStep1 = new ConditionalStep({
      if: Operators.BooleanTrue(functionStep.output.result),
      description: 'is private note?',
    });

    const functionStep4 = new FunctionStep({
      autoRetry: false,
      description: 'private note yes',
      code: function yourFunction(parameters, libraries) {
        return true;
      },
      parameters: {},
    });

    const ifelseStep2 = new ConditionalStep({
      if: Operators.BooleanTrue(functionStep4.output.result),
      description: 'privagte note conditional',
    });

    const functionStep5 = new FunctionStep({
      autoRetry: false,
      description: 'private condition yes',
      code: function yourFunction(parameters, libraries) {},
      parameters: {},
    });

    const functionStep6 = new FunctionStep({
      autoRetry: false,
      description: 'private conditional no',
      code: function yourFunction(parameters, libraries) {},
      parameters: {},
    });

    triggerStep
      .nextStep(functionStep)
      .nextStep(
        inboundStep
          .whenTrue(
            functionStep1
              .nextStep(ifelseStep.whenFalse(functionStep2))
              .nextStep(functionStep3),
          )
          .whenFalse(
            ifelseStep1.whenTrue(
              functionStep4.nextStep(
                ifelseStep2.whenTrue(functionStep5).whenFalse(functionStep6),
              ),
            ),
          ),
      );

    /**
     * Pass all steps used in the workflow to the `.register()`
     * function. The keys used in this function must remain stable.
     */
    return this.register({
      triggerStep,
      functionStep,
      inboundStep,
      functionStep1,
      ifelseStep,
      functionStep2,
      functionStep3,
      ifelseStep1,
      functionStep4,
      ifelseStep2,
      functionStep5,
      functionStep6,
    });
  }

  /**
   * The name of the workflow, used in the Dashboard and Connect Portal.
   */
  name: string = 'New Workflow';

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
  readonly id: string = '858e60c2-39d2-40f4-8e80-d4697d6c27ac';
}
