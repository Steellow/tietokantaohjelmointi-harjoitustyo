import PostPreview from "./PostPreview";
import useAxios from "axios-hooks";

const PostMapper = () => {
  const [{ data, loading, error }] = useAxios("http://localhost:5000/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Check the console.</p>;

  return (
    <>
      {data.map((post) => (
        <PostPreview key={post.id} id={post.id} />
      ))}
    </>
  );
};
export default PostMapper;
