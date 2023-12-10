import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  description: varchar("description", { length: 256 }),
  status: boolean("status").default(false).notNull(),
});
