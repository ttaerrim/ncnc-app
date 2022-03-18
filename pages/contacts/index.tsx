import axios from 'axios';
import Contact from 'components/Contact';
import React from 'react';
import { ContactType } from 'types/index';

const Contacts = ({ qaTypes, qaBuyList, qaSellList }: ContactType) => {
    return (
        <Contact
            qaTypes={qaTypes}
            qaBuyList={qaBuyList}
            qaSellList={qaSellList}
        />
    );
};

export async function getServerSideProps() {
    const { data: qna } = await axios.get('/qa-types');
    const { data: qaBuy } = await axios.get('/qas?qaTypeId=1');
    const { data: qaSell } = await axios.get('/qas?qaTypeId=2');

    const qaTypes = qna.qaTypes;
    const qaBuyList = qaBuy.qas;
    const qaSellList = qaSell.qas;

    return { props: { qaTypes, qaBuyList, qaSellList } };
}
export default Contacts;
