import { useEffect, useState } from 'react';
import useAxios from 'hooks/useAxios';

import { QaType, QnaType } from 'types/qaTypes';
import QnaList from './QnaList';

import * as Styled from './styled';
import { ContactType } from 'types/contactTypes';

const Contact = ({ qaTypes, qaBuyList, qaSellList }: ContactType) => {
    const [qaId, setQaId] = useState<number>(1);

    const qaIdHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const id = Number(event.currentTarget.id);
        setQaId(id);
    };

    return (
        <Styled.ContactDiv>
            <Styled.DescSection>
                <Styled.Title>상담 시간 안내</Styled.Title>
                <Styled.Time>평일 10:00 ~ 18:00</Styled.Time>
                <Styled.Rest>
                    점심시간 12:30 ~ 13:30 / 토·일·공휴일 휴무
                </Styled.Rest>
            </Styled.DescSection>
            <Styled.BackgroundDiv></Styled.BackgroundDiv>
            <Styled.FrequentQaSection>
                <Styled.FrequentQa>자주 묻는 질문</Styled.FrequentQa>
                <Styled.ButtonDiv>
                    {qaTypes?.map((type) => (
                        <Styled.FrequentButton
                            key={type.id}
                            onClick={qaIdHandler}
                            id={type.id.toString()}
                            isClick={type.id === qaId}
                        >
                            {type.name}
                        </Styled.FrequentButton>
                    ))}
                </Styled.ButtonDiv>
            </Styled.FrequentQaSection>
            <Styled.BackgroundDiv></Styled.BackgroundDiv>
            <QnaList
                qaId={qaId}
                qaBuyList={qaBuyList}
                qaSellList={qaSellList}
            />
        </Styled.ContactDiv>
    );
};
export default Contact;
