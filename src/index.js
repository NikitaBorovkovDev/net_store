import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import App, {loader} from "./components/app/App";
import {
    createBrowserRouter,
    RouterProvider,
    useLoaderData,
} from "react-router-dom";
// import Slider from "./slider";
import reportWebVitals from "./reportWebVitals";

import "./style/style.scss";
import "./style/normalize.css";
import ErrorPage from "./components/errorPage/errorPage";
import Spinner from "./components/spinner/spinner";
const MainRootLazy = React.lazy(() => import("./components/routes/main"));

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<Spinner />}>
                        <MainRootLazy />
                    </Suspense>
                ),
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
