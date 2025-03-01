/**
 * Table Component - Pagination Stories
 * 
 * This file contains stories for the Table component that focus on pagination functionality,
 * showing different page size configurations and navigation controls.
 */

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from '../../../components/lib';

const meta = {
  title: 'Components/Table/Pagination',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Examples of paginated tables with various page sizes and navigation controls.'
      }
    }
  }
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A basic table with simple pagination controls.
 * This example shows how to implement pagination in a table with a fixed number of items per page.
 */
export const BasicPagination: Story = {
  render: function BasicPaginationTable(args) {
    const [currentPage, setCurrentPage] = useState(1);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      console.log('Page changed to:', page);
    };
    
    return (
      <div>
        <p>This table shows {args.itemsPerPage} rows per page with simple pagination controls.</p>
        <Table
          {...args}
          hasPagination={true}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
  args: {
    caption: 'Customer Orders',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    hasHoverEffect: true,
    itemsPerPage: 5,
    totalItems: 25, // 5 pages total
    headers: [
      { text: 'Order ID' },
      { text: 'Customer' },
      { text: 'Date' },
      { text: 'Status' },
      { text: 'Amount' }
    ],
    rows: [
      // Page 1
      [
        { text: 'ORD-001' },
        { text: 'John Smith' },
        { text: '2023-05-12' },
        { text: 'Delivered' },
        { text: '$124.99' }
      ],
      [
        { text: 'ORD-002' },
        { text: 'Sarah Johnson' },
        { text: '2023-05-13' },
        { text: 'Processing' },
        { text: '$75.50' }
      ],
      [
        { text: 'ORD-003' },
        { text: 'Michael Brown' },
        { text: '2023-05-14' },
        { text: 'Delivered' },
        { text: '$249.99' }
      ],
      [
        { text: 'ORD-004' },
        { text: 'Emily Wilson' },
        { text: '2023-05-15' },
        { text: 'Shipped' },
        { text: '$32.75' }
      ],
      [
        { text: 'ORD-005' },
        { text: 'David Miller' },
        { text: '2023-05-16' },
        { text: 'Processing' },
        { text: '$99.95' }
      ],
      // Page 2
      [
        { text: 'ORD-006' },
        { text: 'Jessica Lee' },
        { text: '2023-05-17' },
        { text: 'Shipped' },
        { text: '$149.99' }
      ],
      [
        { text: 'ORD-007' },
        { text: 'Robert Taylor' },
        { text: '2023-05-18' },
        { text: 'Delivered' },
        { text: '$45.25' }
      ],
      [
        { text: 'ORD-008' },
        { text: 'Lisa Anderson' },
        { text: '2023-05-19' },
        { text: 'Processing' },
        { text: '$199.50' }
      ],
      [
        { text: 'ORD-009' },
        { text: 'James Wilson' },
        { text: '2023-05-20' },
        { text: 'Delivered' },
        { text: '$85.99' }
      ],
      [
        { text: 'ORD-010' },
        { text: 'Amanda Clark' },
        { text: '2023-05-21' },
        { text: 'Shipped' },
        { text: '$129.75' }
      ],
      // Page 3
      [
        { text: 'ORD-011' },
        { text: 'Thomas Moore' },
        { text: '2023-05-22' },
        { text: 'Processing' },
        { text: '$67.50' }
      ],
      [
        { text: 'ORD-012' },
        { text: 'Jennifer White' },
        { text: '2023-05-23' },
        { text: 'Delivered' },
        { text: '$298.99' }
      ],
      [
        { text: 'ORD-013' },
        { text: 'Christopher Davis' },
        { text: '2023-05-24' },
        { text: 'Shipped' },
        { text: '$54.25' }
      ],
      [
        { text: 'ORD-014' },
        { text: 'Michelle Wilson' },
        { text: '2023-05-25' },
        { text: 'Processing' },
        { text: '$175.00' }
      ],
      [
        { text: 'ORD-015' },
        { text: 'Daniel Martinez' },
        { text: '2023-05-26' },
        { text: 'Delivered' },
        { text: '$39.99' }
      ],
      // Additional rows for Pages 4 and 5
      [
        { text: 'ORD-016' },
        { text: 'Rachel Thompson' },
        { text: '2023-05-27' },
        { text: 'Shipped' },
        { text: '$149.95' }
      ],
      [
        { text: 'ORD-017' },
        { text: 'Brian Johnson' },
        { text: '2023-05-28' },
        { text: 'Processing' },
        { text: '$89.50' }
      ],
      [
        { text: 'ORD-018' },
        { text: 'Nicole Miller' },
        { text: '2023-05-29' },
        { text: 'Delivered' },
        { text: '$215.75' }
      ],
      [
        { text: 'ORD-019' },
        { text: 'Kevin Williams' },
        { text: '2023-05-30' },
        { text: 'Shipped' },
        { text: '$65.99' }
      ],
      [
        { text: 'ORD-020' },
        { text: 'Laura Davis' },
        { text: '2023-05-31' },
        { text: 'Processing' },
        { text: '$125.50' }
      ],
      [
        { text: 'ORD-021' },
        { text: 'Jason Brown' },
        { text: '2023-06-01' },
        { text: 'Delivered' },
        { text: '$179.99' }
      ],
      [
        { text: 'ORD-022' },
        { text: 'Rebecca Wilson' },
        { text: '2023-06-02' },
        { text: 'Shipped' },
        { text: '$49.95' }
      ],
      [
        { text: 'ORD-023' },
        { text: 'Matthew Garcia' },
        { text: '2023-06-03' },
        { text: 'Processing' },
        { text: '$95.75' }
      ],
      [
        { text: 'ORD-024' },
        { text: 'Stephanie Lee' },
        { text: '2023-06-04' },
        { text: 'Delivered' },
        { text: '$159.50' }
      ],
      [
        { text: 'ORD-025' },
        { text: 'Andrew Taylor' },
        { text: '2023-06-05' },
        { text: 'Shipped' },
        { text: '$79.99' }
      ]
    ]
  }
};

/**
 * A table with pagination and adjustable page size.
 * This example demonstrates how to implement a page size selector.
 */
export const AdjustablePageSize: Story = {
  render: function AdjustablePageSizeTable(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    // Handle page size change
    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newPageSize = parseInt(event.target.value, 10);
      setItemsPerPage(newPageSize);
      setCurrentPage(1); // Reset to first page when changing page size
    };
    
    // Calculate total pages based on current page size is now handled by the Table component
    
    return (
      <div>
        <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
          <label htmlFor="pageSize" style={{ marginRight: '0.5rem' }}>Rows per page:</label>
          <select 
            id="pageSize" 
            value={itemsPerPage} 
            onChange={handlePageSizeChange}
            style={{ padding: '0.25rem' }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
        </div>
        
        <Table
          {...args}
          hasPagination={true}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={args.rows.length}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
  args: {
    caption: 'Product Inventory',
    hasHorizontalBorders: true,
    isStriped: true,
    hasShadow: true,
    color: 'blue',
    headers: [
      { text: 'Product ID' },
      { text: 'Name' },
      { text: 'Category' },
      { text: 'Price' },
      { text: 'Stock' }
    ],
    rows: [
      // 25 rows of product data
      [{ text: 'P001' }, { text: 'Smartphone X' }, { text: 'Electronics' }, { text: '$999.99' }, { text: '45' }],
      [{ text: 'P002' }, { text: 'Wireless Headphones' }, { text: 'Audio' }, { text: '$159.99' }, { text: '120' }],
      [{ text: 'P003' }, { text: 'Smart Watch' }, { text: 'Wearables' }, { text: '$349.99' }, { text: '78' }],
      [{ text: 'P004' }, { text: 'Laptop Pro' }, { text: 'Computers' }, { text: '$1,499.99' }, { text: '32' }],
      [{ text: 'P005' }, { text: 'Wireless Keyboard' }, { text: 'Accessories' }, { text: '$89.99' }, { text: '65' }],
      [{ text: 'P006' }, { text: 'HD Monitor' }, { text: 'Displays' }, { text: '$249.99' }, { text: '41' }],
      [{ text: 'P007' }, { text: 'Gaming Mouse' }, { text: 'Accessories' }, { text: '$59.99' }, { text: '92' }],
      [{ text: 'P008' }, { text: 'External SSD' }, { text: 'Storage' }, { text: '$129.99' }, { text: '56' }],
      [{ text: 'P009' }, { text: 'Wireless Earbuds' }, { text: 'Audio' }, { text: '$99.99' }, { text: '110' }],
      [{ text: 'P010' }, { text: 'Desktop Computer' }, { text: 'Computers' }, { text: '$899.99' }, { text: '28' }],
      [{ text: 'P011' }, { text: 'Tablet Pro' }, { text: 'Electronics' }, { text: '$449.99' }, { text: '52' }],
      [{ text: 'P012' }, { text: 'Bluetooth Speaker' }, { text: 'Audio' }, { text: '$79.99' }, { text: '87' }],
      [{ text: 'P013' }, { text: 'Webcam HD' }, { text: 'Accessories' }, { text: '$69.99' }, { text: '64' }],
      [{ text: 'P014' }, { text: 'Gaming Controller' }, { text: 'Gaming' }, { text: '$49.99' }, { text: '73' }],
      [{ text: 'P015' }, { text: 'Smart Thermostat' }, { text: 'Smart Home' }, { text: '$129.99' }, { text: '39' }],
      [{ text: 'P016' }, { text: 'Security Camera' }, { text: 'Smart Home' }, { text: '$199.99' }, { text: '48' }],
      [{ text: 'P017' }, { text: 'Wireless Router' }, { text: 'Networking' }, { text: '$89.99' }, { text: '57' }],
      [{ text: 'P018' }, { text: 'Portable Charger' }, { text: 'Accessories' }, { text: '$39.99' }, { text: '95' }],
      [{ text: 'P019' }, { text: 'USB-C Hub' }, { text: 'Accessories' }, { text: '$49.99' }, { text: '82' }],
      [{ text: 'P020' }, { text: 'Digital Camera' }, { text: 'Photography' }, { text: '$599.99' }, { text: '31' }],
      [{ text: 'P021' }, { text: 'Fitness Tracker' }, { text: 'Wearables' }, { text: '$79.99' }, { text: '68' }],
      [{ text: 'P022' }, { text: 'Wireless Charging Pad' }, { text: 'Accessories' }, { text: '$29.99' }, { text: '104' }],
      [{ text: 'P023' }, { text: 'VR Headset' }, { text: 'Gaming' }, { text: '$299.99' }, { text: '26' }],
      [{ text: 'P024' }, { text: 'Mechanical Keyboard' }, { text: 'Accessories' }, { text: '$129.99' }, { text: '47' }],
      [{ text: 'P025' }, { text: 'Noise-Canceling Headphones' }, { text: 'Audio' }, { text: '$249.99' }, { text: '59' }]
    ]
  }
};

/**
 * A table with pagination information and controls both above and below the table.
 * This example shows a more comprehensive pagination interface.
 */
export const ComprehensivePagination: Story = {
  render: function ComprehensivePaginationTable(args) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = args.itemsPerPage || 10;
    const totalItems = args.rows.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Calculate the current range of items being displayed
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    // Handle page change
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    
    // Pagination info component
    const PaginationInfo = () => (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        margin: '1rem 0',
        fontSize: '0.9rem'
      }}>
        <div>
          Showing {startItem} to {endItem} of {totalItems} items
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>
    );
    
    return (
      <div>
        <PaginationInfo />
        
        <Table
          {...args}
          hasPagination={true}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
        
        <PaginationInfo />
      </div>
    );
  },
  args: {
    caption: 'Employee List',
    hasHorizontalBorders: true,
    hasCellBorders: true,
    isStriped: true,
    hasShadow: true,
    isResponsive: true,
    itemsPerPage: 8,
    headers: [
      { text: 'ID' },
      { text: 'Name' },
      { text: 'Department' },
      { text: 'Position' },
      { text: 'Location' },
      { text: 'Start Date' }
    ],
    // 24 rows of employee data to demonstrate pagination
    rows: [
      [{ text: 'E001' }, { text: 'John Smith' }, { text: 'Engineering' }, { text: 'Senior Developer' }, { text: 'New York' }, { text: '2020-06-15' }],
      [{ text: 'E002' }, { text: 'Jane Doe' }, { text: 'Marketing' }, { text: 'Marketing Manager' }, { text: 'Chicago' }, { text: '2021-02-10' }],
      [{ text: 'E003' }, { text: 'Robert Johnson' }, { text: 'Finance' }, { text: 'Accountant' }, { text: 'Boston' }, { text: '2019-11-05' }],
      [{ text: 'E004' }, { text: 'Emily Wilson' }, { text: 'HR' }, { text: 'HR Specialist' }, { text: 'Los Angeles' }, { text: '2022-01-22' }],
      [{ text: 'E005' }, { text: 'Michael Brown' }, { text: 'Engineering' }, { text: 'Frontend Developer' }, { text: 'Seattle' }, { text: '2021-08-14' }],
      [{ text: 'E006' }, { text: 'Sarah Davis' }, { text: 'Sales' }, { text: 'Sales Representative' }, { text: 'Denver' }, { text: '2020-03-18' }],
      [{ text: 'E007' }, { text: 'David Miller' }, { text: 'Operations' }, { text: 'Operations Manager' }, { text: 'Atlanta' }, { text: '2018-05-27' }],
      [{ text: 'E008' }, { text: 'Lisa Taylor' }, { text: 'Customer Support' }, { text: 'Support Agent' }, { text: 'Miami' }, { text: '2022-02-03' }],
      [{ text: 'E009' }, { text: 'James Wilson' }, { text: 'Engineering' }, { text: 'Backend Developer' }, { text: 'San Francisco' }, { text: '2021-04-12' }],
      [{ text: 'E010' }, { text: 'Jennifer Lee' }, { text: 'Marketing' }, { text: 'Content Writer' }, { text: 'Chicago' }, { text: '2020-09-30' }],
      [{ text: 'E011' }, { text: 'Thomas Moore' }, { text: 'Finance' }, { text: 'Financial Analyst' }, { text: 'Boston' }, { text: '2019-07-15' }],
      [{ text: 'E012' }, { text: 'Amanda Clark' }, { text: 'HR' }, { text: 'Recruiter' }, { text: 'Los Angeles' }, { text: '2021-11-08' }],
      [{ text: 'E013' }, { text: 'Christopher Davis' }, { text: 'Engineering' }, { text: 'DevOps Engineer' }, { text: 'Seattle' }, { text: '2020-10-05' }],
      [{ text: 'E014' }, { text: 'Michelle White' }, { text: 'Sales' }, { text: 'Sales Manager' }, { text: 'Denver' }, { text: '2018-12-14' }],
      [{ text: 'E015' }, { text: 'Daniel Martinez' }, { text: 'Operations' }, { text: 'Logistics Coordinator' }, { text: 'Atlanta' }, { text: '2022-03-22' }],
      [{ text: 'E016' }, { text: 'Jessica Brown' }, { text: 'Customer Support' }, { text: 'Support Manager' }, { text: 'Miami' }, { text: '2019-08-09' }],
      [{ text: 'E017' }, { text: 'Matthew Garcia' }, { text: 'Engineering' }, { text: 'QA Engineer' }, { text: 'San Francisco' }, { text: '2021-01-18' }],
      [{ text: 'E018' }, { text: 'Laura Johnson' }, { text: 'Marketing' }, { text: 'Digital Marketing Specialist' }, { text: 'Chicago' }, { text: '2022-04-05' }],
      [{ text: 'E019' }, { text: 'Kevin Williams' }, { text: 'Finance' }, { text: 'Finance Manager' }, { text: 'Boston' }, { text: '2018-09-12' }],
      [{ text: 'E020' }, { text: 'Rachel Thompson' }, { text: 'HR' }, { text: 'HR Manager' }, { text: 'Los Angeles' }, { text: '2020-05-20' }],
      [{ text: 'E021' }, { text: 'Jason Brown' }, { text: 'Engineering' }, { text: 'Systems Administrator' }, { text: 'Seattle' }, { text: '2021-07-14' }],
      [{ text: 'E022' }, { text: 'Stephanie Lee' }, { text: 'Sales' }, { text: 'Account Executive' }, { text: 'Denver' }, { text: '2019-10-30' }],
      [{ text: 'E023' }, { text: 'Andrew Taylor' }, { text: 'Operations' }, { text: 'Project Manager' }, { text: 'Atlanta' }, { text: '2020-02-17' }],
      [{ text: 'E024' }, { text: 'Nicole Wilson' }, { text: 'Customer Support' }, { text: 'Technical Support' }, { text: 'Miami' }, { text: '2021-05-24' }]
    ]
  }
}; 