import { useState } from 'react';

import Qna from './Qna';
import { Qa } from 'types/index';

interface QnaListType {
    qaId: number;
    qaBuyList: Qa[];
    qaSellList: Qa[];
}
const QnaList = ({ qaId, qaBuyList, qaSellList }: QnaListType) => {
    const [currentQa, setCurrentQa] = useState<number>(0);
    return (
        <section>
            <div>
                {qaId === 1
                    ? qaBuyList.map((qa) => (
                          <Qna
                              key={qa.id}
                              qa={qa}
                              currentQa={currentQa}
                              setCurrentQa={setCurrentQa}
                          />
                      ))
                    : qaSellList.map((qa) => (
                          <Qna
                              key={qa.id}
                              qa={qa}
                              currentQa={currentQa}
                              setCurrentQa={setCurrentQa}
                          />
                      ))}
            </div>
        </section>
    );
};

export default QnaList;
