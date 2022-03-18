import { Dispatch, SetStateAction } from 'react';
import { Qa } from 'types';

export interface QnaProps {
    qa: Qa;
    currentQa: number;
    setCurrentQa: Dispatch<SetStateAction<number>>;
}
