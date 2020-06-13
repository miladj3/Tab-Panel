export interface IData {
    title: string;
    data: Array<IStudent>;
}
export interface IStudent {
    name: string;
    surName: string;
    birthday: Date;
    id: number;
}