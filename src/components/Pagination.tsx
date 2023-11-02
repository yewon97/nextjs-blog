import { getPaginationPost } from '@/service/posts';

type Props = {
  current: string;
};

export default async function Pagination({ current }: Props) {
  const posts = await getPaginationPost(current);
  console.log('posts: ', posts);

  return (
    <>
      <section></section>
      <section></section>
    </>
  );
}
