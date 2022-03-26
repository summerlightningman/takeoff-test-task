import {useAppSelector} from "./redux/hooks";
import {useDispatch} from "react-redux";
import {MainActionType} from "./types/main-reducer";

function App() {
    const {counter} = useAppSelector(state => state.main);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: MainActionType.INCREMENT});
    };

    const decrement = () => {
        dispatch({type: MainActionType.DECREMENT});
    }

    return (
        <>
            <h1>Counter:</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        </>
    );
}

export default App;
