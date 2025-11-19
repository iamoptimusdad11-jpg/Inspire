import { useEffect, useState } from "react";

export function useComments(post_id) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`/api/comments?post_id=${post_id}`)
      .then((res) => res.json())
      .then(setComments);
  }, [post_id]);

  return comments;
}
