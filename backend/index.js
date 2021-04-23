const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "harjoitustyoUser",
  password: "tIPOgJc85ThmqgJb",
  database: "harjoitustyo",
});

//* Posts
app.get("/posts", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM post", (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
  });
});

app.get("/posts/search/:searchTerm", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM post", (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        const searchTerm = [req.params.searchTerm][0].toLowerCase();
        filteredResults = rows.filter((post) => {
          // console.log(post.title.toLowerCase().search(searchTerm));
          // console.log(post.body.toLowerCase().search(searchTerm));

          return post.title.toLowerCase().search(searchTerm) >= 0 || post.body.toLowerCase().search(searchTerm) >= 0;
        });
        if (filteredResults.length === 0) {
          res.send(`No results found`);
        } else {
          res.send(filteredResults);
        }
      }
    });
  });
});

app.get("/posts/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM post WHERE id = ?", [req.params.id], (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(rows[0]);
      }
    });
  });
});

app.delete("/posts/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("DELETE FROM post WHERE id = ?", [req.params.id], (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(`Deleted post with ID ${[req.params.id]}`);
      }
    });
  });
});

app.post("/posts", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    const params = req.body;

    conn.query("INSERT INTO post SET ?", params, (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(`New post has been added.`);
      }
    });
  });
});

app.put("/posts", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    const { id, title, body } = req.body;

    if (!id) {
      res.send("Must specify ID when updating post");
      return;
    }

    conn.query(
      "UPDATE post SET title = COALESCE(?, title), body = COALESCE(?, body), editdate = CURRENT_TIMESTAMP WHERE id = ?",
      [title, body, id],
      (err, rows) => {
        conn.release(); // return the connection to pool
        if (err) {
          console.log(err);
        } else {
          res.send(`Post with ID ${id} has been edited.`);
        }
      }
    );
  });
});

//* Comments

app.get("/comments", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM comment", (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
  });
});

app.get("/comments/search/:searchTerm", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM comment", (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        const searchTerm = [req.params.searchTerm][0].toLowerCase();
        filteredResults = rows.filter((comment) => {
          // console.log(comment.body.toLowerCase().search(searchTerm));

          return comment.body.toLowerCase().search(searchTerm) >= 0;
        });
        if (filteredResults.length === 0) {
          res.send(`No results found`);
        } else {
          res.send(filteredResults);
        }
      }
    });
  });
});

app.get("/comments/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("SELECT * FROM comment WHERE id = ?", [req.params.id], (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(rows[0]);
      }
    });
  });
});

app.delete("/comments/:id", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    conn.query("DELETE FROM comment WHERE id = ?", [req.params.id], (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(`Deleted comment with ID ${[req.params.id]}`);
      }
    });
  });
});

app.post("/comments", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    const params = req.body;

    if (!params.postId) {
      res.send("Must specify postId");
      return;
    } else if (!params.body) {
      res.send("Must specify comment post");
      return;
    }

    conn.query("INSERT INTO comment SET ?", params, (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(`New comment has been added.`);
      }
    });
  });
});

app.put("/comments", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    const { id, body } = req.body;

    if (!id) {
      res.send("Must specify ID when updating comment");
      return;
    } else if (!body) {
      res.send("Must specify body when updating comment");
      return;
    }

    conn.query("UPDATE comment SET body = COALESCE(?, body) WHERE id = ?", [body, id], (err, rows) => {
      conn.release(); // return the connection to pool
      if (err) {
        console.log(err);
      } else {
        res.send(`Comment with ID ${id} has been edited.`);
      }
    });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
