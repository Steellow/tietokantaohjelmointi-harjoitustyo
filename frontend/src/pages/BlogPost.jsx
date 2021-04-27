import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";

const BlogPost = () => {
  return (
    <article className=" py-7">
      <h1 className="mb-2 text-3xl font-bold">Blog Title</h1>
      <time className="tracking-wider text-gray-600 uppercase">Released on Feb 17, 2021</time>
      <p className="my-6">
        Here's how to stop Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop
        Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop Plausible Analytics
        from counting your own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop Plausible Analytics from counting your
        own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop Plausible Analytics from counting your own visits made using
        mobile devices. Hint: use a bookmarklet. Here's how to stop Plausible Analytics from counting your own visits made using mobile devices. Hint:
        use a bookmarklet. Here's how to stop Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet.{" "}
        Here's how to stop Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop
        Plausible Analytics from counting your own visits made using mobile devices. Hint: use a bookmarklet. Here's how to stop Plausible Analytics
        from counting your own visits made using mobile devices. Hint: use a bookmarklet.
      </p>
      <h3 className="pt-4 mb-2 text-3xl font-bold border-t border-gray-300">Comments</h3>
      <Comment />
      <Comment />
      <Comment />
      <CommentForm />
    </article>
  );
};

export default BlogPost;
