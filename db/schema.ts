import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const blogTable = pgTable('blogs',{
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 80}).notNull(),
    body: text().notNull(),
    orgId: text().notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().defaultNow(),
    // userId: uuid().references(() => userTable.id), 
})

// export const userTable = pgTable('users',{
//     id: uuid().primaryKey().defaultRandom(),
//     name: varchar({length: 80}).notNull(),
//     email: varchar({length: 80}).notNull(),
//     password: varchar({length: 80}).notNull(),
//     orgId: text().notNull(),
// })

export type CreateBlogType = typeof blogTable.$inferInsert;
export type BlogType = typeof blogTable.$inferSelect;