import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };
export type PostPagination = Post & { status: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), `data`, 'posts', `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata)
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content };
}

export async function getPaginationPost(
  current: string,
): Promise<PostPagination[] | {}> {
  const currentPostIndex = await getAllPosts() //
    .then((posts) => posts.findIndex((post) => post.path === current));

  const findPrev = await getAllPosts().then((posts) => {
    return posts
      .filter(
        (_, idx) => idx === currentPostIndex - 1 && currentPostIndex - 1 !== 0,
      )
      .map((post, idx) => ({
        ...post,
        status: 'prev',
      }));
  });
  const findNext = await getAllPosts().then((posts) => {
    return posts
      .filter(
        (_, idx) =>
          idx === currentPostIndex + 1 && currentPostIndex + 1 !== posts.length,
      )
      .map((post, idx) => ({
        ...post,
        status: 'next',
      }));
  });

  return [findPrev, findNext];
}
