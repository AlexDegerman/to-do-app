import '../styles/SortDropDown.css'

const SortDropDown = ({ sortOrder, sortChange, filterStatus, filterChange }) => {

  return (
    <div className="sort-filter-container">
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select 
          id="sortOrder"
          value={sortOrder}
          onChange={sortChange}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
  
      <div>
        <label htmlFor="filterStatus">Show:</label>
        <select
          id="filterStatus"
          value={filterStatus}
          onChange={filterChange}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  )
  
}

export default SortDropDown