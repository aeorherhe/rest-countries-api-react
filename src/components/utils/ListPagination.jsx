import styled from "styled-components";
import { useGlobalContext } from "../../services/GlobalContext";

const ListPagination = () => {
  const {
    state: { totalPages, currentPage },
    dispatch,
  } = useGlobalContext();

  if (totalPages <= 1) return null;

  return (
    <StyledListPagination>
      <div className="pages">
        <p>
          showing {currentPage} of {totalPages}
        </p>
      </div>
      <div className="btns">
        <button
          className="btn prev"
          onClick={() => dispatch({ type: "prev_page" })}
        >
          prev
        </button>
        <button
          className="btn next"
          onClick={() => dispatch({ type: "next_page" })}
        >
          next
        </button>
      </div>
    </StyledListPagination>
  );
};
export default ListPagination;

/****************** styled component ***************/
/****************** styled component ***************/

const StyledListPagination = styled.div`
  /* border: var(--line); */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  .btn {
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: var(--box-shadow);
    padding: 0.5rem 1rem;
    transition: var(--transition);
    background-color: var(--Element);
    color: var(--Text);
    transition: var(--transition);
    border-left: var(--btn-border);
  }

  .prev {
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .next {
    border-radius: 0 0.5rem 0.5rem 0;
    border: none;
  }
`;
/*
 <button className="btn prev">prev</button>;
 {
   paginate.map((page) => {
     return (
       <button className="btn" key={page}>
         {page}
       </button>
     );
   });
 }
 <button className="btn next">next</button>;
 */
