import {Outlet, useLoaderData, useNavigation} from "react-router-dom";

import Header from "../appHeader/header";
import MainRoot from "../routes/main";

// export async function loader() {
//     let res = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(<MainRoot />);
//         }, 5500);
//     });
//     return res;
// }

const App = () => {
    const navigation = useNavigation();
    // const content = useLoaderData();
    // console.log(!content);
    // let mainw = content ? content : <div>123</div>;
    return (
        <>
            <Header></Header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default App;
