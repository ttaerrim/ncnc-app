import { Dispatch, SetStateAction } from 'react';
import { Option } from 'types';

export type OptionItemProps = {
    option: Option;
    originalPrice: number;
    setSelectedOption: Dispatch<SetStateAction<string>>;
};
