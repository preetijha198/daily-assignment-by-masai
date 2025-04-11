import React, { useEffect, useState } from 'react';

const PaginatedList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
    };
    fetchPosts();
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Paginated Posts</h2>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            style={{
              margin: '0 5px',
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedList;
