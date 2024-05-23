import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
};

export default SignUpPage;
