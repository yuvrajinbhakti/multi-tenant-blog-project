'use server'


import { db } from "@/db";
import { CreateBlogType, blogTable } from "@/db/schema";


// server action to insert blog into database
export const createBlog = async (payload:CreateBlogType)=>{ 
    const [result] =   await db.insert(blogTable).values(payload).returning({
        id: blogTable.id,
    });
    return result.id;
}