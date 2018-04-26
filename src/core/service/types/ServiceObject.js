// @flow

import type {uiInteractionObject} from './uiInteraction';
import type {apiSetObject} from "./apiSet";

export type ServiceObject = {
    [key: string]: {
        provider: Object,
        apiSet: apiSetObject,
        uiInteraction: uiInteractionObject,
    }
}
