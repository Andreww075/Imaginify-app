import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
};

export default SignInPage;
