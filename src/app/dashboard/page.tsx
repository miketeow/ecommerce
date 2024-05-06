"use client";
import { StoreModal } from "@/components/modals/store-modal";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  return (
    <main>
      <nav>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
      <div>DashboardPage</div>
    </main>
  );
};

export default DashboardPage;
