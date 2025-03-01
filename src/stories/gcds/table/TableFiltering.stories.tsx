/**
 * Table Component - Filtering Stories
 * 
 * This file contains stories for the Table component that focus on filtering functionality,
 * including header filters and various filtering interfaces.
 */

import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Filtering',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Examples of tables with filtering capabilities.'
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A table with header-based filtering.
 * This example demonstrates filtering data by clicking on a filter icon in the header.
 */
export const HeaderFiltering: Story = {
  render: function HeaderFilteringTable(args) {
    const [filteredCount, setFilteredCount] = useState(args.rows.length);
    
    // Handle filter changes
    const handleFilter = (filterValues: Record<number, string>) => {
      // Count how many rows would remain after filtering
      let filtered = args.rows;
      
      if (Object.keys(filterValues).length > 0) {
        filtered = args.rows.filter(row => {
          return Object.entries(filterValues).every(([colIndex, filterValue]) => {
            if (!filterValue.trim()) return true;
            
            const columnIndex = parseInt(colIndex, 10);
            const cellValue = row[columnIndex]?.text || '';
            
            return cellValue.toLowerCase().includes(filterValue.toLowerCase());
          });
        });
      }
      
      setFilteredCount(filtered.length);
    };
    
    return (
      <div>
        <p>
          Click on the filter icon (⋮⋮) in any column header to filter the data. 
          {filteredCount < args.rows.length && ` Showing ${filteredCount} of ${args.rows.length} rows.`}
        </p>
        <Table
          {...args}
          isFilterable={true}
          hasHeaderFilters={true}
          onFilter={handleFilter}
        />
      </div>
    );
  },
  args: {
    caption: 'Employee Directory',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    headers: [
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Position' },
      { text: 'Location' },
      { text: 'Email' }
    ],
    rows: [
      [
        { text: 'Alice Johnson' },
        { text: 'Engineering' },
        { text: 'Frontend Developer' },
        { text: 'New York' },
        { text: 'alice.j@example.com' }
      ],
      [
        { text: 'Bob Smith' },
        { text: 'Marketing' },
        { text: 'Marketing Manager' },
        { text: 'Chicago' },
        { text: 'bob.s@example.com' }
      ],
      [
        { text: 'Carol Williams' },
        { text: 'HR' },
        { text: 'HR Specialist' },
        { text: 'Los Angeles' },
        { text: 'carol.w@example.com' }
      ],
      [
        { text: 'David Brown' },
        { text: 'Engineering' },
        { text: 'Backend Developer' },
        { text: 'Seattle' },
        { text: 'david.b@example.com' }
      ],
      [
        { text: 'Eva Davis' },
        { text: 'Finance' },
        { text: 'Financial Analyst' },
        { text: 'Boston' },
        { text: 'eva.d@example.com' }
      ],
      [
        { text: 'Frank Miller' },
        { text: 'Engineering' },
        { text: 'DevOps Engineer' },
        { text: 'New York' },
        { text: 'frank.m@example.com' }
      ],
      [
        { text: 'Grace Lee' },
        { text: 'Marketing' },
        { text: 'Content Writer' },
        { text: 'Chicago' },
        { text: 'grace.l@example.com' }
      ],
      [
        { text: 'Henry Wilson' },
        { text: 'HR' },
        { text: 'Recruiter' },
        { text: 'Los Angeles' },
        { text: 'henry.w@example.com' }
      ],
      [
        { text: 'Iris Taylor' },
        { text: 'Finance' },
        { text: 'Accountant' },
        { text: 'Boston' },
        { text: 'iris.t@example.com' }
      ],
      [
        { text: 'Jack Thompson' },
        { text: 'Engineering' },
        { text: 'QA Engineer' },
        { text: 'Seattle' },
        { text: 'jack.t@example.com' }
      ]
    ]
  }
};

/**
 * A table with both header filtering and pagination.
 * This example shows how to combine filtering with pagination controls.
 */
export const FilteringWithPagination: Story = {
  render: function FilteringWithPaginationTable(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCount, setFilteredCount] = useState(args.rows.length);
    const [filteredRows, setFilteredRows] = useState([...args.rows]);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    // Handle filter changes
    const handleFilter = (filterValues: Record<number, string>) => {
      let filtered = args.rows;
      
      if (Object.keys(filterValues).length > 0) {
        filtered = args.rows.filter(row => {
          return Object.entries(filterValues).every(([colIndex, filterValue]) => {
            if (!filterValue.trim()) return true;
            
            const columnIndex = parseInt(colIndex, 10);
            const cellValue = row[columnIndex]?.text || '';
            
            return cellValue.toLowerCase().includes(filterValue.toLowerCase());
          });
        });
      }
      
      setFilteredRows(filtered);
      setFilteredCount(filtered.length);
      setCurrentPage(1); // Reset to first page when filter changes
    };
    
    return (
      <div>
        <p>
          This example shows filtering combined with pagination.
          {filteredCount < args.rows.length && ` Showing ${filteredCount} of ${args.rows.length} rows.`}
        </p>
        <Table
          {...args}
          rows={filteredRows}
          hasPagination={true}
          currentPage={currentPage}
          itemsPerPage={5}
          totalItems={filteredCount}
          isFilterable={true}
          hasHeaderFilters={true}
          onFilter={handleFilter}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
  args: {
    caption: 'Product Catalog',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    color: 'blue',
    headers: [
      { text: 'Product Name' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' },
      { text: 'Rating' }
    ],
    rows: [
      [{ text: 'Smartphone X' }, { text: 'Electronics' }, { text: '$999.99' }, { text: '45' }, { text: '4.7/5' }],
      [{ text: 'Wireless Headphones' }, { text: 'Audio' }, { text: '$159.99' }, { text: '120' }, { text: '4.5/5' }],
      [{ text: 'Smart Watch' }, { text: 'Wearables' }, { text: '$349.99' }, { text: '78' }, { text: '4.2/5' }],
      [{ text: 'Laptop Pro' }, { text: 'Computers' }, { text: '$1,499.99' }, { text: '32' }, { text: '4.9/5' }],
      [{ text: 'Wireless Keyboard' }, { text: 'Accessories' }, { text: '$89.99' }, { text: '65' }, { text: '4.0/5' }],
      [{ text: 'HD Monitor' }, { text: 'Displays' }, { text: '$249.99' }, { text: '41' }, { text: '4.3/5' }],
      [{ text: 'Gaming Mouse' }, { text: 'Accessories' }, { text: '$59.99' }, { text: '92' }, { text: '4.6/5' }],
      [{ text: 'External SSD' }, { text: 'Storage' }, { text: '$129.99' }, { text: '56' }, { text: '4.8/5' }],
      [{ text: 'Wireless Earbuds' }, { text: 'Audio' }, { text: '$99.99' }, { text: '110' }, { text: '4.4/5' }],
      [{ text: 'Desktop Computer' }, { text: 'Computers' }, { text: '$899.99' }, { text: '28' }, { text: '4.5/5' }],
      [{ text: 'Tablet Pro' }, { text: 'Electronics' }, { text: '$449.99' }, { text: '52' }, { text: '4.1/5' }],
      [{ text: 'Bluetooth Speaker' }, { text: 'Audio' }, { text: '$79.99' }, { text: '87' }, { text: '4.2/5' }],
      [{ text: 'Webcam HD' }, { text: 'Accessories' }, { text: '$69.99' }, { text: '64' }, { text: '3.9/5' }],
      [{ text: 'Gaming Controller' }, { text: 'Gaming' }, { text: '$49.99' }, { text: '73' }, { text: '4.7/5' }],
      [{ text: 'Smart Thermostat' }, { text: 'Smart Home' }, { text: '$129.99' }, { text: '39' }, { text: '4.3/5' }]
    ]
  }
};

/**
 * A table with a custom filtering interface.
 * This example shows how to implement a custom filtering form above the table.
 */
export const CustomFiltering: Story = {
  render: function CustomFilteringTable(args) {
    const [filteredRows, setFilteredRows] = useState([...args.rows]);
    const [filters, setFilters] = useState({
      name: '',
      category: '',
      minPrice: '',
      maxPrice: '',
    });
    
    // Handle filter changes
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFilters(prevFilters => ({
        ...prevFilters,
        [name]: value
      }));
    };
    
    // Apply filters
    const applyFilters = () => {
      const filtered = args.rows.filter(row => {
        // Name filter (column 0)
        const nameMatch = !filters.name || row[0].text.toLowerCase().includes(filters.name.toLowerCase());
        
        // Category filter (column 1)
        const categoryMatch = !filters.category || row[1].text === filters.category;
        
        // Price range filter (column 2)
        const price = parseFloat(row[2].text.replace(/[$,]/g, ''));
        const minPriceMatch = !filters.minPrice || price >= parseFloat(filters.minPrice);
        const maxPriceMatch = !filters.maxPrice || price <= parseFloat(filters.maxPrice);
        
        return nameMatch && categoryMatch && minPriceMatch && maxPriceMatch;
      });
      
      setFilteredRows(filtered);
    };
    
    // Reset filters
    const resetFilters = () => {
      setFilters({
        name: '',
        category: '',
        minPrice: '',
        maxPrice: '',
      });
      setFilteredRows([...args.rows]);
    };
    
    // Get unique categories for the dropdown
    const categories = [...new Set(args.rows.map(row => row[1].text))];
    
    return (
      <div>
        <div style={{ 
          padding: '1rem', 
          marginBottom: '1rem', 
          backgroundColor: '#f9f9f9', 
          borderRadius: '4px',
          border: '1px solid #eaeaea'
        }}>
          <h3 style={{ marginTop: 0 }}>Filter Products</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Search products..."
                style={{ width: '100%', padding: '0.5rem' }}
              />
            </div>
            
            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Category
              </label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={{ width: '100%', padding: '0.5rem' }}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Price Range
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  placeholder="Min"
                  style={{ width: '50%', padding: '0.5rem' }}
                />
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  placeholder="Max"
                  style={{ width: '50%', padding: '0.5rem' }}
                />
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button
              onClick={resetFilters}
              style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: '#1d4ed8', 
                color: 'white', 
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Apply Filters
            </button>
          </div>
        </div>
        
        <p>Showing {filteredRows.length} of {args.rows.length} products</p>
        
        <Table
          {...args}
          rows={filteredRows}
        />
      </div>
    );
  },
  args: {
    caption: 'Product Catalog',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    color: 'green',
    headers: [
      { text: 'Product Name' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' },
      { text: 'Rating' }
    ],
    rows: [
      [{ text: 'Smartphone X' }, { text: 'Electronics' }, { text: '$999.99' }, { text: '45' }, { text: '4.7/5' }],
      [{ text: 'Wireless Headphones' }, { text: 'Audio' }, { text: '$159.99' }, { text: '120' }, { text: '4.5/5' }],
      [{ text: 'Smart Watch' }, { text: 'Wearables' }, { text: '$349.99' }, { text: '78' }, { text: '4.2/5' }],
      [{ text: 'Laptop Pro' }, { text: 'Computers' }, { text: '$1,499.99' }, { text: '32' }, { text: '4.9/5' }],
      [{ text: 'Wireless Keyboard' }, { text: 'Accessories' }, { text: '$89.99' }, { text: '65' }, { text: '4.0/5' }],
      [{ text: 'HD Monitor' }, { text: 'Displays' }, { text: '$249.99' }, { text: '41' }, { text: '4.3/5' }],
      [{ text: 'Gaming Mouse' }, { text: 'Accessories' }, { text: '$59.99' }, { text: '92' }, { text: '4.6/5' }],
      [{ text: 'External SSD' }, { text: 'Storage' }, { text: '$129.99' }, { text: '56' }, { text: '4.8/5' }],
      [{ text: 'Wireless Earbuds' }, { text: 'Audio' }, { text: '$99.99' }, { text: '110' }, { text: '4.4/5' }],
      [{ text: 'Desktop Computer' }, { text: 'Computers' }, { text: '$899.99' }, { text: '28' }, { text: '4.5/5' }],
      [{ text: 'Tablet Pro' }, { text: 'Electronics' }, { text: '$449.99' }, { text: '52' }, { text: '4.1/5' }],
      [{ text: 'Bluetooth Speaker' }, { text: 'Audio' }, { text: '$79.99' }, { text: '87' }, { text: '4.2/5' }],
      [{ text: 'Webcam HD' }, { text: 'Accessories' }, { text: '$69.99' }, { text: '64' }, { text: '3.9/5' }],
      [{ text: 'Gaming Controller' }, { text: 'Gaming' }, { text: '$49.99' }, { text: '73' }, { text: '4.7/5' }],
      [{ text: 'Smart Thermostat' }, { text: 'Smart Home' }, { text: '$129.99' }, { text: '39' }, { text: '4.3/5' }]
    ]
  }
}; 