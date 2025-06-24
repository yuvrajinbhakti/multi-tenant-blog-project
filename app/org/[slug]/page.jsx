'use client'
import { useState } from "react";
import Nav from "../../components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function OrgLandingPage() {
  const [blogContent,setBlogContent] = useState('');
const [blogTitle,setBlogTitle] = useState('');
  return (
    <main>
        <Nav/>
        <div className="container mx-auto p-8">
          <Input placeholder="Title" value={blogTitle} onChange={(e)=>setBlogTitle(e.target.value)} /> 
              <Textarea placeholder="Write your blog here..."  
              className="mt-2"
              value={blogContent} 
              onChange={(e)=>setBlogContent(e.target.value)} />
              {/* {blogContent} */} 
            <Button>Create Blog</Button>
        </div>
    </main>
  );
}