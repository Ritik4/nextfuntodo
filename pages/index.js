import Head from "next/head";
import Todo from "../components/Todo";

export default function () {
  return (
    <div>
      <Head>
        <title>Todo App</title>
      </Head>

      <Todo />
    </div>
  );
}
