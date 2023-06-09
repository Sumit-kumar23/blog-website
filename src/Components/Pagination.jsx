import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const {page, handlePageChange, totalPages}=useContext(AppContext);
  return (
    <div>
      <div>
        {  page>1 && 
            (<button onClick={() => handlePageChange(page-1)}>
              Previous
            </button>)
        }

        {
          page<totalPages &&
          (
            <button onClick={() => handlePageChange(page+1)}>
              Next
            </button>
          )
        }
        <p>
          PAGE {page} OF {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
