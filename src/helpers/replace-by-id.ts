import {IHasID} from "../types/common";


const replaceById = (list: IHasID[], element: IHasID): IHasID[] =>
    list.reduce((acc, val) => val.id === element.id ? [...acc, element] : [...acc, val], Array<IHasID>());

export default replaceById