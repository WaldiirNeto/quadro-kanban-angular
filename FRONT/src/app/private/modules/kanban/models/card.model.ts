export interface CardModel {
    id: string
    titulo: string
    conteudo: string
    lista: string
}

export interface listCarPerType {
    [key: string]: Array<CardModel>
}