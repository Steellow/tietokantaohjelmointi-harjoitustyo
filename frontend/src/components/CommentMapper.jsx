import useAxios from "axios-hooks";
import CommentForm from "../components/CommentForm";
import Comment from "./Comment";

const CommentMapper = ({ id }) => {
  const [{ data, loading, error }] = useAxios(`http://localhost:5000/posts/${id}/comments`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Check the console.</p>;

  return (
    <div id="comments">
      {data.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
      <CommentForm id={id} />
    </div>
  );
};

export default CommentMapper;
