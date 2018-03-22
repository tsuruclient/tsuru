// @flow

import type {authObject} from "./auth";
import type {uiInteractionObject} from './uiInteraction';
import type {apiSetObject} from "./apiSet";

export type ServiceObject = {
    name: string, // Service name.
    auth: authObject,
    ui_interaction: uiInteractionObject,
    api_set: apiSetObject,
}
