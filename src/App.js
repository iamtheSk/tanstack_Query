import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PostsTraditional from "./components/traditionalWay/PostsTraditional";
import PostsRQ from "./components/RQWay/PostsRQ";
import PostDetailsRQ from "./components/RQWay/PostDetailsRQ";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Traditional Posts</Link>
            </li>
            <li>
              <Link to="/rq-posts">RQ Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsTraditional />} />
        <Route path="/rq-posts" element={<PostsRQ />} />
        <Route path="/rq-posts/:postId" element={<PostDetailsRQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
