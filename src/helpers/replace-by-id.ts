interface IHasID {
    id: number
}

const replaceById = <A extends IHasID>(list: A[], element: A): A[] =>
    list.reduce((acc, val) => val.id === element.id ? [...acc, element] : [...acc, val], Array<A>());

export default replaceById