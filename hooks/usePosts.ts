import { useState, useEffect } from "react";

export function usePosts(board) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/posts?board=${board}`)
      .then((res) => res.json())
      .then(setPosts);
  }, [board]);

  return posts;
}
