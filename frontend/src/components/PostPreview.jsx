import useAxios from "axios-hooks";
import { Link } from "react-router-dom";

const PostPreview = ({ id }) => {
  const [{ data, loading, error }] = useAxios(`http://localhost:5000/posts/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Check the console.</p>;

  return (
    <article className="border-b-2 border-gray-100 py-7">
      <h3 className="inline-block mr-4 text-xl font-bold">
        <Link to={`/post/${data.id}`} className="underline link hover:text-red-600 active:text-red-700">
          {data.title}
        </Link>
      </h3>
      <time className="pl-4 tracking-wider uppercase border-l-2 border-gray-300">{new Date(data.publishdate).toLocaleDateString("fi-FI")}</time>
      <p className="my-4">{data.body}</p>
      <Link to={`/post/${data.id}`} className="text-sm tracking-wider underline uppercase link">
        Continue reading
      </Link>
    </article>
  );
};

export default PostPreview;
