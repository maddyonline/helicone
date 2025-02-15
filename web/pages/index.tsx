import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import AuthLayout from "../components/shared/layout/authLayout";
import BasePageV2 from "../components/shared/layout/basePageV2";
import LoadingAnimation from "../components/shared/loadingAnimation";
import MetaData from "../components/shared/metaData";
import HomePage from "../components/templates/home/homePage";
import { DEMO_EMAIL } from "../lib/constants";
import { redirectIfLoggedIn } from "../lib/redirectIdLoggedIn";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const {} = props;
  const router = useRouter();

  const user = useUser();

  if (user && user.email !== DEMO_EMAIL) {
    router.push("/dashboard");
    return (
      <AuthLayout user={user}>
        <LoadingAnimation title="Redirecting you to your dashboard..." />
      </AuthLayout>
    );
  }

  return (
    <MetaData title="Home">
      <HomePage />
    </MetaData>
  );
};

export default Home;
