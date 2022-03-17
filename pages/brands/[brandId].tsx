import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { conCategory2s } from 'types/categoryTypes';

import BrandItems from 'components/Brand/BrandItems';
import { fetcher } from 'utils/fetcher';
import { ConItems } from 'types/items';
import { GetServerSideProps } from 'next';

const BrandId = ({ conItems }: { conItems: ConItems[] }) => {
    return <BrandItems conItems={conItems} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { brandId } = context.query;

    const getCategories = async () => {
        const { conCategory2 } = await fetcher(`/con-category2s/${brandId}`);
        const { conCategory1Id } = conCategory2;

        const { conCategory1 } = await fetcher(
            `/con-category1s/${conCategory1Id}/nested`,
        );
        const { conCategory2s } = conCategory1;

        const selectedBrand = conCategory2s.find(
            (brand: conCategory2s) => Number(brand.id) === Number(brandId),
        );
        const { conItems } = selectedBrand;

        return conItems;
    };

    const conItems = await getCategories();

    return { props: { conItems } };
};

export default BrandId;
