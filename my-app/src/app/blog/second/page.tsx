import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Second Blog",
  },
};

export default function SecondBlog() {
  return <h1>Second Blog Page !</h1>;
}

