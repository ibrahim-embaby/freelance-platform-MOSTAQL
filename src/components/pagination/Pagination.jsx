import "./pagination.css";

function Pagination({ totaltNumber, setCurrentPageNumber, currentPageNumber }) {
  const numbersList = [];

  for (let i = 1; i <= totaltNumber; i++) {
    numbersList[i] = i;
  }

  return (
    <div className="pagination">
      <button
        onClick={
          currentPageNumber <= 1
            ? null
            : () => setCurrentPageNumber((prev) => prev - 1)
        }
        className="pageArrow"
        disabled={currentPageNumber <= 1 ? true : false}
      >
        {"<"}
      </button>
      {numbersList.map((number) => (
        <span
          key={number}
          onClick={() => setCurrentPageNumber(number)}
          className={
            number === currentPageNumber ? "pageNumber active" : "pageNumber"
          }
        >
          {number}
        </span>
      ))}

      <button
        onClick={
          currentPageNumber >= totaltNumber
            ? null
            : () => setCurrentPageNumber((prev) => prev + 1)
        }
        className="pageArrow"
        disabled={currentPageNumber >= totaltNumber ? true : false}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
