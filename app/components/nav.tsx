"use client";
import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher } from "@clerk/nextjs";
const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-semibold text-2xl"> Blog Application</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </nav>
  );
};
export default Nav;
