import { index, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const store = pgTable("store", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  userId: text("user_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const billboard = pgTable(
  "billboard",
  {
    id: uuid("id").defaultRandom().primaryKey().notNull(),
    label: text("label").notNull(),
    storeId: uuid("store_id")
      .references(() => store.id)
      .notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => {
    return {
      storeIndex: index("store_index").on(table.storeId),
    };
  }
);
export type Store = typeof store.$inferSelect;
export type Billboard = typeof billboard.$inferSelect;
