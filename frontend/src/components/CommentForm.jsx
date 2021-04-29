import axios from "axios";
import { useState } from "react";

const CommentForm = ({ id, callBack }) => {
  const [body, setBody] = useState();

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "http://localhost:5000/comments",
      data: {
        postId: id,
        body: body,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="mt-6 text-xl font-semibold">Leave a comment</h5>
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        name="body"
        className="block w-full h-24 my-3 border rounded md:w-2/4"
      />
      <button type="submit" className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
