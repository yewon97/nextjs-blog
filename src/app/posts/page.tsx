import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  // 카테고리 중복을 Set을 이용해 제거함
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
