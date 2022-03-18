import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { wrapper } from 'store';
import { fetcher } from 'utils/fetcher';
import Container from 'layout/Container';
import Header from 'layout/Header';
import ContentsBox from 'layout/ContentsBox';

import { reset } from 'styles/globalStyles';
import { Global } from '@emotion/react';
import { GetServerSideProps, NextPageContext } from 'next';
import { getRouterId } from 'utils/functions';
import App from 'next/app';

interface MyAppProps extends AppProps {
    title: string;
}
export const MyApp = ({ Component, pageProps, title }: MyAppProps) => {
    return (
        <Container>
            <Header name={title} />
            <Global styles={reset} />
            <ContentsBox>
                <Component {...pageProps} />
            </ContentsBox>
        </Container>
    );
};

interface Context extends NextPageContext {
    router: Router;
}
interface Router {
    route: string;
    pathname: string;
    query: { id: string };
    asPath: string;
    isFallback: boolean;
    basePath: string;
    locale: undefined;
    locales: undefined;
    defaultLocale: undefined;
    isReady: boolean;
    domainLocales: undefined;
    isPreview: boolean;
    isLocaleDomain: boolean;
}

MyApp.getInitialProps = async (context: Context) => {
    const path = context.router.asPath;
    const getCategories = async () => {
        const id = getRouterId(path);
        console.log(id);
        if (path.includes('categories')) {
            const fetchUrl = `/con-category1s/${id}/nested`;
            const { conCategory1 } = await fetcher(fetchUrl);
            return conCategory1.name;
        } else if (path.includes('brands')) {
            const fetchUrl = `/con-category2s/${id}`;
            const { conCategory2 } = await fetcher(fetchUrl);
            return conCategory2.name;
        } else if (path.includes('contacts')) {
            return '고객센터';
        } else {
            return '';
        }
    };
    const title = await getCategories();
    console.log(title);
    return { title: title };
};

export default wrapper.withRedux(MyApp);
