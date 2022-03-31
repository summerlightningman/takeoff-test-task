import {Name} from "./contact";

export interface ContactListItemSearchProps {
    onSearch: (query: Name) => void
}