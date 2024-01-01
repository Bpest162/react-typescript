import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

export const withReactQuery = (WrappedComponent: () => React.ReactNode) => {
    return (props: any) => (
        <QueryClientProvider client={client}>
            <WrappedComponent {...props}/>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
};
