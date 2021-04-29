import PostPreview from "./PostPreview";
import useAxios from "axios-hooks";

const PostMapper = () => {
  const [{ data, loading, error }] = useAxios("http://localhost:5000/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! Check the console.</p>;

  return (
    <>
      {data
        .slice(0) // Using slice(0) here because just using reverse() didn't work for some reason
        .reverse()
        .map((post) => (
          <PostPreview key={post.id} id={post.id} />
        ))}
    </>
  );
};
export default PostMapper;
