import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();

  // 카테고리 중복을 Set을 이용해 제거함
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
