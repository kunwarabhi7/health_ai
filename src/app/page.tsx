import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <Button>Click me</Button>
      <SignInButton>Login</SignInButton>
    </div>
  );
};

export default Home;
