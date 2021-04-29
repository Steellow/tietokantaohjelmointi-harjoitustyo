import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/posts/${id}`)
        .then((res) => {
          if (res.status === 200) {
            setTitle(res.data.title);
            setBody(res.data.body);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body);
    if (id) {
      axios({
        method: "put",
        url: "http://localhost:5000/posts",
        data: {
          id: id,
          title: title,
          body: body,
        },
      })
        .then((res) => {
          history.push(`/post/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios({
        method: "post",
        url: "http://localhost:5000/posts",
        data: {
          title: title,
          body: body,
        },
      })
        .then((res) => {
          const newPostId = Number(res.data.match(/\d+/g)[0]);
          history.push(`/post/${newPostId}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <article className=" py-7">
      <form onSubmit={handleSubmit}>
        <label className="text-xl font-semibold">Title</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 my-1 mb-6 border rounded form-input"
          placeholder="Awesome blog post"
        />
        <label className="text-xl font-semibold ">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          name="body"
          placeholder="The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy ... all rest on the principle that material points have trajectories. They are defined as lines in space-time. Even the dynamics of continuous, solid or fluid media describes the trajectories of the material points which constitute the bodies in motion. But the indeterminacy relation of Heisenberg prevents quantum particles from having such classical trajectories, since their position and velocity can not be exactly defined at the same time. How then can it explain all the appearances which legitimize the fundamental concepts of classical physics?"
          className="block w-full p-2 my-3 border rounded h-80"
        ></textarea>
        <button type="submit" className="btn-red">
          Submit
        </button>
      </form>
    </article>
  );
};

export default NewPost;
