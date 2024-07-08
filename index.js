import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3001;

const prisma = new PrismaClient();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

app.use("/statics", express.static("statics"));

// The dumb way
// ===========================================================
// app.get("/pages/:page", async function (req, res) {
//   const pageSize = 5;
//   const page = Number(req.params.page);
//   const posts = await prisma.post.findMany({});

//   const pages = [];
//   while (posts.length) {
//     pages.push(posts.splice(0, pageSize));
//   }

//   const prev = page === 1 ? undefined : page - 1;
//   const next = page === pages.length ? undefined : page + 1;

//   res.render("list", {
//     posts: pages[page - 1],
//     prev: prev,
//     next: next,
//   });
// });

// Offset pagination
// ===========================================================
// app.get("/pages/:page", async function (req, res) {
//   const pageSize = 5;
//   const page = Number(req.params.page);
//   const posts = await prisma.post.findMany({
//     skip: pageSize * (page - 1),
//     take: pageSize,
//   });

//   const prev = page === 1 ? undefined : page - 1;
//   const next = page + 1;

//   res.render("list", {
//     posts: posts,
//     prev: prev,
//     next: next,
//   });
// });

// Cursor pagination (load more)
// ===========================================================
const pageSize = 10;

app.get("/", async function (req, res) {
  const posts = await prisma.post.findMany({
    take: pageSize,
  });
  const last = posts.at(-1);
  const cursor = last.id;

  res.render("list", {
    posts: posts,
    cursor: cursor,
  });
});

app.post("/load", async function (req, res) {
  const { cursor } = req.body;

  const posts = await prisma.post.findMany({
    take: pageSize,
    skip: 1,
    cursor: {
      id: Number(cursor),
    },
  });

  const last = posts.at(-1);
  const newCursor = last.id;

  res.status(200).json({
    posts: posts,
    cursor: newCursor,
  });
});

app.listen(port, () => {
  console.log(
    `Blog application listening on port ${port}. Visit http://localhost:${port}.`
  );
});
