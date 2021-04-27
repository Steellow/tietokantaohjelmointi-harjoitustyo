const Comment = ({ data }) => {
  return (
    <div className="pl-4 my-4 border-l-2 border-gray-300">
      <time className="tracking-wider text-gray-400 uppercase">{new Date(data.publishdate).toLocaleDateString("fi-FI")}</time>
      <p className="mt-2">{data.body}</p>
    </div>
  );
};

export default Comment;
