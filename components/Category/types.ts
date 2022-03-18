import { DealItemProps } from 'components/Deal/types';
import { conCategory1, conCategory1s } from 'types/index';

export interface CategoryProps {
    categories: conCategory1 | null;
    categoryList: conCategory1s[];
    id: number;
    conItems: DealItemProps[];
}
