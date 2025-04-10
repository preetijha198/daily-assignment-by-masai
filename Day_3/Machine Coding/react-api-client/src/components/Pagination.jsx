export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
      <div style={{ marginTop: "10px" }}>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => onPageChange(i + 1)} style={{ margin: "0 5px" }}>
            {i + 1}
          </button>
        ))}
      </div>
    );
  }
  