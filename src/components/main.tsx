import {useNavigate} from "react-router-dom";
import {FC, useEffect} from "react";

import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";


const Main: FC = () => {
    const {token} = useAppSelector(state => state.main);
    const navigate = useNavigate();
    useEffect(() => {
        if (!token)
            navigate('/login');
    });

    return <h1>Main works!</h1>
}

export default Main