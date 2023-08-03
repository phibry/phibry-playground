import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const RouterError = () => {
    const error = useRouteError() as Error;
    console.log(error);

    if (!isRouteErrorResponse(error)) return null;

    return (
        <>
            <h1>
                OOPS!
            </h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    );
};

export default RouterError;
