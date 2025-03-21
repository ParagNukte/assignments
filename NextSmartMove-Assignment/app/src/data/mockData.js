export const sidebarMenuItems = [
  {
    key: "home",
    label: "Trasaction",
    icon: "house.svg",
    description: "Navigate to home page",
  },
  {
    key: "notes",
    label: "Content",
    icon: "align-right.svg",
    description: "View and manage your notes",
  },
  {
    key: "timer",
    label: "Tasks",
    icon: "clipboard-check-list.svg",
    description: "Set and manage timers",
  },
  {
    key: "tracking",
    label: "Phases",
    icon: "clock-circle.svg",
    description: "Track your daily tasks and activities",
  },
  {
    key: "signtracking",
    label: "Sign Tracking",
    icon: "clipboard-pen.svg",
    description: "Track your daily tasks and activities",
  },
  {
    key: "bookmarks",
    label: "Critical Info and Setting",
    icon: "bookmark.svg",
    description: "Access your saved bookmarks",
  },
  {
    key: "frames",
    label: "Analysis Phases",
    icon: "analysis.svg",
    description: "Organize your creative projects",
  },
  {
    key: "calendar",
    label: "Calenders",
    icon: "calender-days-2.svg",
    description: "View your schedule and events",
  },
  {
    key: "lock",
    label: "Activity log",
    icon: "reports.svg",
    description: "Access your private content",
  },
];

// DataTable configurations
export const dataTableColumns = [
  { id: "id", label: "#", numeric: true, width: "2%" },
  { id: "phase", label: "Phase", width: "25%" },
  { id: "status", label: "Status", width: "auto" },
  { id: "document", label: "Document", width: "auto" },
  { id: "responsibleParty", label: "Responsible Party", width: "auto" },
  { id: "updateDate", label: "Update Date", width: "auto" },
];

// Optimized status options and color mapping
export const statusOptions = [
  { value: "completed", label: "Completed", color: "#4caf50" },
  { value: "undefined", label: "Undefined", color: "#ff9800" },
  { value: "notstarted", label: "Not Started", color: "red" },
  { value: "continuing", label: "Continuing", color: "#2196f3" },
];

export const dropdownOptions = [
  { value: "all", label: "All Records" },
  { value: "recent", label: "Recent Records" },
  { value: "archived", label: "Archived Records" },
];

// Sample data for testing/development with nested rows
export const sampleTableData = [
  {
    id: 1,
    phase: "Design",
    status: "Completed",
    document: false,
    responsibleParty: "John Doe",
    updateDate: "2023-01-15",
    subRows: [
      {
        id: 1.1, // Same field as parent
        phase: "Design - Task 1",
        status: "Completed",
        document: true,
        responsibleParty: "Emma Wilson",
        updateDate: "2023-01-10",
      },
      {
        id: 1.2, // Same field as parent
        phase: "Design - Task 2",
        status: "Completed",
        document: true,
        responsibleParty: "Marcus Lee",
        updateDate: "2023-01-12",
      },
      {
        id: 1.3, // Same field as parent
        phase: "Design - Task 3",
        status: "Continuing",
        document: false,
        responsibleParty: "John Doe",
        updateDate: "2023-01-18",
      },
    ],
  },
  {
    id: 2,
    phase: "Development",
    status: "Not Started",
    document: true,
    responsibleParty: "Jane Smith",
    updateDate: "2023-02-20",
    subRows: [
      {
        id: 2.1, // Same field as parent
        phase: "Development - Task 1",
        status: "Continuing",
        document: true,
        responsibleParty: "David Kim",
        updateDate: "2023-02-25",
      },
      {
        id: 2.2, // Same field as parent
        phase: "Development - Task 2",
        status: "Not Started",
        document: true,
        responsibleParty: "Sarah Wong",
        updateDate: "2023-02-28",
      },
    ],
  },
  {
    id: 3,
    phase: "Testing",
    status: "Undefined",
    document: true,
    responsibleParty: "Mike Johnson",
    updateDate: "2023-03-10",
    subRows: [
      {
        id: 3.1, // Same field as parent
        phase: "Testing - Task 1",
        status: "Undefined",
        document: false,
        responsibleParty: "Lisa Chen",
        updateDate: "2023-03-15",
      },
      {
        id: 3.2, // Same field as parent
        phase: "Testing - Task 2",
        status: "Not Started",
        document: true,
        responsibleParty: "Mike Johnson",
        updateDate: "2023-03-20",
      },
      {
        id: 3.3, // Same field as parent
        phase: "Testing - Task 3",
        status: "Not Started",
        document: false,
        responsibleParty: "James Wilson",
        updateDate: "2023-03-25",
      },
    ],
  },
  {
    id: 4,
    phase: "Deployment",
    status: "Completed",
    document: true,
    responsibleParty: "Sarah Williams",
    updateDate: "2023-04-05",
    subRows: [
      {
        id: 4.1, // Same field as parent
        phase: "Deployment - Task 1",
        status: "Completed",
        document: true,
        responsibleParty: "Alex Turner",
        updateDate: "2023-04-10",
      },
      {
        id: 4.2, // Same field as parent
        phase: "Deployment - Task 2",
        status: "Continuing",
        document: true,
        responsibleParty: "Sarah Williams",
        updateDate: "2023-04-15",
      },
    ],
  },
  {
    id: 5,
    phase: "Design",
    status: "Not Started",
    document: true,
    responsibleParty: "Robert Brown",
    updateDate: "2023-05-22",
    subRows: [
      {
        id: 5.1, // Same field as parent
        phase: "Design - Task 1",
        status: "Not Started",
        document: false,
        responsibleParty: "Alice Green",
        updateDate: "2023-05-25",
      },
    ],
  },
];

// Filter data by search term - improved version
export const filterDataBySearchTerm = (data, searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") {
    return data;
  }

  const term = searchTerm.toLowerCase().trim();

  return data.filter((item) => {
    // Check all properties in the item
    const mainRowMatch = Object.entries(item).some(([key, value]) => {
      // Skip subRows array and boolean values
      if (
        key === "subRows" ||
        typeof value === "boolean" ||
        value === null ||
        value === undefined
      ) {
        return false;
      }

      // Convert to string and check if it includes the search term
      return String(value).toLowerCase().includes(term);
    });

    // If main row matches, return true immediately
    if (mainRowMatch) return true;

    // Check sub-rows if they exist
    if (
      item.subRows &&
      Array.isArray(item.subRows) &&
      item.subRows.length > 0
    ) {
      return item.subRows.some((subRow) =>
        Object.entries(subRow).some(([key, value]) => {
          // Skip boolean values
          if (
            typeof value === "boolean" ||
            value === null ||
            value === undefined
          ) {
            return false;
          }

          // Convert to string and check if it includes the search term
          return String(value).toLowerCase().includes(term);
        })
      );
    }

    return false;
  });
};

// Filter data by status
export const filterDataByStatus = (data, status) => {
  if (!status || status === "") {
    return data;
  }
  let newData = data.filter(
    (item) =>
      item.status.toLowerCase().replace(/\s+/g, "") ===
      status.toLowerCase().replace(/\s+/g, "")
  );
  return newData;
};

// Sort data by date
export const sortDataByDate = (
  data,
  field = "updateDate",
  ascending = false
) => {
  return [...data].sort((a, b) => {
    // Handle missing or invalid dates
    if (!a[field]) return ascending ? -1 : 1;
    if (!b[field]) return ascending ? 1 : -1;

    const dateA = new Date(a[field]);
    const dateB = new Date(b[field]);

    // Handle invalid dates
    const isDateAValid = !isNaN(dateA.getTime());
    const isDateBValid = !isNaN(dateB.getTime());

    if (!isDateAValid && !isDateBValid) return 0;
    if (!isDateAValid) return ascending ? -1 : 1;
    if (!isDateBValid) return ascending ? 1 : -1;

    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// Format date from ISO string to readable format
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Application settings
export const appSettings = {
  defaultTheme: "light",
  sidebarWidth: 60,
  collapsedSidebarWidth: 60,
  defaultSidebarState: "expanded", // or 'collapsed'
  defaultActiveMenuItem: "home",
};
