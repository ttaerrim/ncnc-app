import Category from 'components/Category';
import { conCategory1 } from 'types/categoryTypes';
import { conCategory1s } from 'types/categoryListTypes';
import { DealItemProps } from 'components/Deal/types';
import { fetcher } from 'utils/fetcher';
import { GetServerSideProps } from 'next';

const CategoriesPage = ({
    id,
    categories,
    categoryList,
    conItems,
}: {
    id: string;
    categories: conCategory1;
    categoryList: conCategory1s[];
    conItems: DealItemProps[];
}) => {
    return (
        <Category
            categories={categories}
            categoryList={categoryList}
            id={Number(id)}
            conItems={conItems}
        />
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const getCategories = async () => {
        const { conCategory1 } = await fetcher(`/con-category1s/${id}/nested`);
        return conCategory1;
    };
    const getCategoryList = async () => {
        const { conCategory1s } = await fetcher(`/con-category1s`);
        return conCategory1s;
    };
    const getConItems = async () => {
        const { conItems } = await fetcher('/con-items/soon');
        return conItems;
    };
    const categories = await getCategories();
    const categoryList = await getCategoryList();
    const conItems = await getConItems();

    return { props: { id, categories, categoryList, conItems } };
};

export default CategoriesPage;
