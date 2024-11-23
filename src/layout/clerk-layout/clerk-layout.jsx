import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ClerkWrapper = ({ children }) => {
  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterMultiSessionSingleSignOutUrl={"/"}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkWrapper;
