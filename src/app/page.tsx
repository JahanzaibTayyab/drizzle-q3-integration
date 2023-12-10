//import { sql } from "@vercel/postgres";
import { db } from "@/lib/drizzle";
import { todo } from "@/lib/schema/todo";
import { eq } from "drizzle-orm";

const addTodo = async () => {
  const response = await db.insert(todo).values({
    title: "This is my 2nd Todo",
    description: "random",
  });
};

const updateTodo = async (id: number, title: string, status: boolean) => {
  const response = await db
    .update(todo)
    .set({
      title,
      status,
    })
    .where(eq(todo.id, id));
};

export default async function Home(): Promise<JSX.Element> {
  // const { rows } = await sql`SELECT * from todo`;
  //await addTodo();
  await updateTodo(7, "This is my 7th updated TODO", true);
  await updateTodo(4, "This is my 4th updated TODO", true);
  const result = await db.select().from(todo);
  console.log("🚀 ~ file: page.tsx:7 ~ Home ~ result:", result);

  return (
    <div>
      Data page
      {result.map((row) => (
        <div key={row.id}>{`${row.id} - ${row.title} - ${row.status}`}</div>
      ))}
    </div>
  );
}
