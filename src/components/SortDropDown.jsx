
const SortDropDown = ({ sortOrder, sortChange}) => {

  return (
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
  )
}

export default SortDropDown