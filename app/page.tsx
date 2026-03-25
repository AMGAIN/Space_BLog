import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PostContainer from "@/components/PostContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className=" mt-10">
        <PostContainer />
      </div>
    </>
  );
}
