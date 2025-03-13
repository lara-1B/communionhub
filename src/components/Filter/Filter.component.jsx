import "./Filter.component.css"

const Filter = ({ categories, locations, onCategoryChange, onLocationChange, onSearchChange }) => {
  return (
    <div className="filter-container">
      <h3>Filter Events</h3>
      
      <input
        type="text"
        placeholder="Search by Event Name"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select onChange={(e) => onLocationChange(e.target.value)}>
        <option value="">All Locations</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
