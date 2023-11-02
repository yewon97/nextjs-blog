import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <FcCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}
