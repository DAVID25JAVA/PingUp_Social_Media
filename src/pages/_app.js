import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ClerkProvider
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        {...pageProps}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </div>
  );
}
