
const SortDropDown = ({ sortOrder, sortChange, filterStatus, filterChange }) => {

  return (
    <div>
      {/* Sorting Dropdown */}
      <label htmlFor="sortOrder">Sort by:</label>
      <select 
        id="sortOrder"
        value={sortOrder}
        onChange={sortChange}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      {/* Filtering Dropdown */}
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
  )
}

export default SortDropDown