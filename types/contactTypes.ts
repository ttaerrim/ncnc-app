import { Qa, QaType } from './qaTypes';

export interface ContactType {
    qaTypes: QaType[];
    qaBuyList: Qa[];
    qaSellList: Qa[];
}
