import {FC} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./login";
import Main from "./main";

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>

    );
}

export default App;
