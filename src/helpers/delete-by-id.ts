import {ID, IHasID} from "../types/common";


const deleteById = (list: IHasID[], id: ID): IHasID[] =>
    list.reduce((acc, val) => val.id !== id ? [...acc, val] : acc, Array<IHasID>());

export default deleteById