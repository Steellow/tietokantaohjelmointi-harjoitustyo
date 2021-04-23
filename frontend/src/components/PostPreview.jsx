const PostPreview = () => {
  return (
    <article className="py-7 border-b-2 border-gray-100">
      <h3 className="font-bold text-xl inline-block mr-4">
        <a href="#" className="link hover:text-red-600 active:text-red-700 underline">
          Blog Title
        </a>
      </h3>
      <time className="border-gray-300 border-l-2 pl-4 tracking-wider uppercase">Feb 17, 2021</time>
      <p className="my-4">
        Here's how to stop Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet.{" "}
      </p>
      <a href="#" className="link text-sm tracking-wider uppercase underline">
        Continue reading
      </a>
    </article>
  );
};

export default PostPreview;
