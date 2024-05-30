"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@useparagon/core");
const slack_1 = require("@useparagon/integrations/slack");
class default_1 extends core_1.Workflow {
    constructor() {
        super(...arguments);
        this.name = 'heyyo';
        this.description = '';
        this.inputs = (0, slack_1.createInputs)({});
        this.defaultEnabled = false;
        this.hidden = false;
        this.id = '7b4483bd-7103-462e-a4ba-8d4cf7b04d5b';
    }
    define(integration, context, connectUser) {
        const triggerStep = new core_1.UnselectedStep();
        const functionStepStep = new core_1.FunctionStep({
            autoRetry: false,
            description: 'Function Step',
            code: function yourFunction(parameters, libraries) {
                return 'hello world';
            },
            parameters: {},
        });
        triggerStep.nextStep(functionStepStep);
        return this.register({ triggerStep, functionStepStep });
    }
    definePermissions(connectUser) {
        return undefined;
    }
}
exports.default = default_1;
//# sourceMappingURL=heyyo.js.map