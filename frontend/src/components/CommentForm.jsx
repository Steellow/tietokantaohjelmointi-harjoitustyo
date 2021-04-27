const CommentForm = () => {
  return (
    <div id="commentForm">
      <h5 className="mt-6 text-xl font-semibold">Leave a comment</h5>
      <textarea required className="block w-full h-24 my-3 border rounded md:w-2/4" />
      <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">Submit</button>
    </div>
  );
};

export default CommentForm;
