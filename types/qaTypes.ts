export interface QnaType {
    qaTypes: QaType[];
}

export interface QaType {
    id: number;
    key: string;
    name: string;
}

export interface Qa {
    id: number;
    question: string;
    answer: string;
}
