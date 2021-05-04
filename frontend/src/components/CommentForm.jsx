import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CommentForm = ({ id, callBack }) => {
  const [body, setBody] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/comments",
      data: {
        postId: id,
        body: body,
      },
    })
      .then((res) => {
        // Using e.preventDefault + history.go because it didn't work on firefox otherwise for some reason �‍♂️
        history.go(0);
      })
      .catch((err) => {
        console.log(err);
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
      <button type="submit" className="btn-red">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
