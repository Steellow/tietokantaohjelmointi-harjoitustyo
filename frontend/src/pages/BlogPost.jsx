import useAxios from "axios-hooks";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CommentMapper from "../components/CommentMapper";

const BlogPost = () => {
  const { id } = useParams();
  const [{ data, loading, error }] = useAxios(`http://localhost:5000/posts/${id}`, { useCache: false });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Check the console.</p>;

  return (
    <article className="py-7">
      <div className="flex justify-between">
        <h1 className="mb-2 text-3xl font-bold">{data.title}</h1>
        <div>
          <Link to={`/edit/${id}`}>
            <button type="submit" className="mr-4 btn-red-outline">
              Edit
            </button>
          </Link>
          <button type="submit" className="px-4 btn-red-outline">
            Delete
          </button>
        </div>
      </div>
      <time className="tracking-wider text-gray-600 uppercase">
        {Date.parse(data.editdate) > Date.parse(data.publishdate)
          ? "Edited on " + new Date(data.editdate).toLocaleDateString("fi-FI")
          : "Published on " + new Date(data.publishdate).toLocaleDateString("fi-FI")}
      </time>
      <p className="my-6">{data.body}</p>
      <h3 className="pt-4 mb-2 text-3xl font-bold border-t border-gray-300">Comments</h3>
      <CommentMapper id={id} />
    </article>
  );
};

export default BlogPost;
