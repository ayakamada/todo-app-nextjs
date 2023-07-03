import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { TodoProvider, useTodoContext } from "@/context/TodoContext";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </TodoProvider>
  );
}
