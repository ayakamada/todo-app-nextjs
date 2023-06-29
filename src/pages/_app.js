import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { TodoProvider, useTodoContext } from "@/context/TodoContext";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
}
