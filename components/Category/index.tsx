import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import Link from 'next/link';
import { selectBrandActions } from 'store';

import Section from 'layout/Section';
import CategoryNav from './CategoryNav';
import { ItemsHolder } from 'components/Brand/styled';
import { conCategory1, conCategory2s } from 'types/categoryTypes';
import { conCategory1s } from 'types/categoryListTypes';
import Deal from 'components/Deal/Deal';
import { useEffect } from 'react';
import { fetcher } from 'utils/fetcher';
import { DealItemProps } from 'components/Deal/types';

const Category = ({
    categories,
    categoryList,
    id,
    conItems,
}: {
    categories: conCategory1 | null;
    categoryList: conCategory1s[];
    id: number;
    conItems: DealItemProps[];
}): JSX.Element => {
    const dispatch = useDispatch();
    const getBrandHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const brandId = Number(event.currentTarget.id);

        dispatch(selectBrandActions.brand(brandId));
    };

    return (
        <CategoryContainer>
            <CategoryNav categoryList={categoryList} id={id} />
            <ItemsHolder>
                {id === 1 && categories ? (
                    <DealBox>
                        <Deal onDealItems={conItems} />
                    </DealBox>
                ) : (
                    <SectionWrapper>
                        {categories!.conCategory2s.map(
                            (category: conCategory2s, i: number) => (
                                <Section key={`category-${i}`}>
                                    <SectionDiv>
                                        <Link href={`/brands/${category.id}`}>
                                            <SectionA
                                                id={i.toString()}
                                                onClick={getBrandHandler}
                                            >
                                                <BrandImg
                                                    src={category.imageUrl}
                                                    alt="logo"
                                                />
                                                <BrandName>
                                                    {category.name}
                                                </BrandName>
                                            </SectionA>
                                        </Link>
                                    </SectionDiv>
                                </Section>
                            ),
                        )}
                    </SectionWrapper>
                )}
            </ItemsHolder>
        </CategoryContainer>
    );
};

const CategoryContainer = styled.div`
    display: flex;
    margin-top: 59px;
    flex-direction: column;
`;

const DealBox = styled.div`
    & > ul {
        margin-top: 5px;
    }
`;

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    background-color: rgb(238, 238, 238);
    overflow: auto;
`;

const SectionDiv = styled.div`
    height: 8em;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;

const SectionA = styled.a`
    margin-bottom: 0.25rem;
    border-radius: 0.5rem;
    text-align: center;
`;

const BrandImg = styled.img`
    width: 43px;
    height: 43px;
`;
const BrandName = styled.div`
    margin-top: 10px;
    font-size: 0%.875rem;
    padding: 0 0.5rem;
`;

export default Category;
