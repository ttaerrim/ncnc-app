import { Fragment } from 'react';
import useAxios from 'hooks/useAxios';
import Link from 'next/link';

import Section from 'layout/Section';
import { conCategory1s } from 'types/index';

import * as Styled from './stlyed';

const Category = ({
    conCategory1s,
}: {
    conCategory1s: conCategory1s[];
}): JSX.Element => {
    return (
        <Fragment>
            <Styled.MainWrapper>
                {conCategory1s.map((category) => (
                    <Section key={category.id}>
                        <Styled.SectionDiv>
                            <Link href={`/categories/${category.id}`}>
                                <Styled.SectionA>
                                    <Styled.GrowDiv>
                                        <Styled.BrandImg
                                            src={category.imageUrl}
                                            alt="logo"
                                        />
                                        <Styled.BrandName>
                                            {category.name}
                                        </Styled.BrandName>
                                    </Styled.GrowDiv>
                                </Styled.SectionA>
                            </Link>
                        </Styled.SectionDiv>
                    </Section>
                ))}
                <Styled.TitleDiv>
                    <div>
                        <Styled.WarnDiv>놓치지 마세요</Styled.WarnDiv>
                        <Styled.TodaySaleDiv>
                            오늘의 땡처리콘!
                        </Styled.TodaySaleDiv>
                    </div>
                </Styled.TitleDiv>
            </Styled.MainWrapper>
        </Fragment>
    );
};

export default Category;
