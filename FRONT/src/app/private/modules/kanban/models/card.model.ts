export interface CardModel {
    id: string
    titulo: string
    conteudo: string
    lista: string
}

export interface listCarPerType {
    [key: string]: Array<CardModel>
}

export interface EventDragAndDropExit {
    container: {
        id: string
    }
    item: {
        dropContainer: {
            data: CardModel[]
        }
    }
}