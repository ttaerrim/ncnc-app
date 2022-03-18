import { Dispatch, SetStateAction } from 'react';
import { Option } from 'types/index';

export type OptionItemProps = {
    option: Option;
    originalPrice: number;
    setSelectedOption: Dispatch<SetStateAction<string>>;
};
