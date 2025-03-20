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
  { id: "id", label: "#", numeric: true },
  { id: "phase", label: "Phase" },
  { id: "status", label: "Status" },
  { id: "document", label: "Document" },
  { id: "responsibleParty", label: "Responsible Party" },
  { id: "updateDate", label: "Update Date" },
];

// Configuration for sub-rows
export const subRowColumns = [
  { id: "taskId", label: "Task ID", numeric: true, width: "5%" },
  { id: "taskName", label: "Task Name", width: "25%" },
  { id: "assignee", label: "Assignee", width: "20%" },
  { id: "dueDate", label: "Due Date", width: "15%" },
  { id: "taskStatus", label: "Status", width: "15%" },
  { id: "priority", label: "Priority", width: "10%" },
  { id: "notes", label: "Notes", width: "10%" },
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
        id: 101, // Same field as parent
        phase: "Design - Task 1",
        status: "Completed",
        document: true,
        responsibleParty: "Emma Wilson",
        updateDate: "2023-01-10",
      },
      {
        id: 102, // Same field as parent
        phase: "Design - Task 2",
        status: "Completed",
        document: true,
        responsibleParty: "Marcus Lee",
        updateDate: "2023-01-12",
      },
      {
        id: 103, // Same field as parent
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
        id: 201, // Same field as parent
        phase: "Development - Task 1",
        status: "Continuing",
        document: true,
        responsibleParty: "David Kim",
        updateDate: "2023-02-25",
      },
      {
        id: 202, // Same field as parent
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
        id: 301, // Same field as parent
        phase: "Testing - Task 1",
        status: "Undefined",
        document: false,
        responsibleParty: "Lisa Chen",
        updateDate: "2023-03-15",
      },
      {
        id: 302, // Same field as parent
        phase: "Testing - Task 2",
        status: "Not Started",
        document: true,
        responsibleParty: "Mike Johnson",
        updateDate: "2023-03-20",
      },
      {
        id: 303, // Same field as parent
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
        id: 401, // Same field as parent
        phase: "Deployment - Task 1",
        status: "Completed",
        document: true,
        responsibleParty: "Alex Turner",
        updateDate: "2023-04-10",
      },
      {
        id: 402, // Same field as parent
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
        id: 501, // Same field as parent
        phase: "Design - Task 1",
        status: "Not Started",
        document: false,
        responsibleParty: "Alice Green",
        updateDate: "2023-05-25",
      },
    ],
  },
];

// Helper functions

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

// Filter data by search term
export const filterDataBySearchTerm = (data, searchTerm) => {
  if (!searchTerm || searchTerm.trim() === "") {
    return data;
  }

  const term = searchTerm.toLowerCase();

  return data.filter((item) => {
    // Check main row fields
    const mainRowMatch =
      String(item.id).toLowerCase().includes(term) ||
      item.phase.toLowerCase().includes(term) ||
      item.status.toLowerCase().includes(term) ||
      item.document.toLowerCase().includes(term) ||
      item.responsibleParty.toLowerCase().includes(term) ||
      item.uploadParty.toLowerCase().includes(term) ||
      (item.updateDate && item.updateDate.toLowerCase().includes(term));

    // If main row matches, return true immediately
    if (mainRowMatch) return true;

    // Check sub-rows if they exist
    if (item.subRows && item.subRows.length > 0) {
      return item.subRows.some(
        (subRow) =>
          String(subRow.taskId).toLowerCase().includes(term) ||
          subRow.taskName.toLowerCase().includes(term) ||
          subRow.assignee.toLowerCase().includes(term) ||
          (subRow.dueDate && subRow.dueDate.toLowerCase().includes(term)) ||
          (subRow.taskStatus &&
            subRow.taskStatus.toLowerCase().includes(term)) ||
          (subRow.priority && subRow.priority.toLowerCase().includes(term)) ||
          (subRow.notes && subRow.notes.toLowerCase().includes(term))
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

  return data.filter((item) => item.status === status);
};

// Sort data by date
export const sortDataByDate = (data, ascending = false) => {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.updateDate);
    const dateB = new Date(b.updateDate);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};
