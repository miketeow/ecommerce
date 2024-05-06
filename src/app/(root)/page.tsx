import { StoreModal } from "@/components/modals/store-modal";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div>Home Page</div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div>You don&apos;t have a store yet</div>
      <StoreModal />
    </main>
  );
}
