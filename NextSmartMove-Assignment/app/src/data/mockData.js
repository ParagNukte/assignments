/* // Sidebar menu items configuration
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
  { id: "id", label: "#", numeric: true, width: "10%" },
  { id: "phase", label: "Phase", width: "auto" },
  { id: "status", label: "Status", width: "auto" },
  { id: "document", label: "Document", width: "auto" },
  { id: "responsibleParty", label: "Responsible Party", width: "auto" },
  { id: "uploadParty", label: "Upload Party", width: "auto" },
];

// Status options for filtering
export const statusOptions = [
  { value: "active", label: "Active", color: "success" },
  { value: "pending", label: "Pending", color: "warning" },
  { value: "inactive", label: "Inactive", color: "error" },
];

// Dropdown options for filtering
export const dropdownOptions = [
  { value: "all", label: "All Records" },
  { value: "recent", label: "Recent Records" },
  { value: "archived", label: "Archived Records" },
];

// Sample data for testing/development
export const sampleTableData = [
  {
    id: 1,
    phase: "Design",
    status: "active",
    document: "doc1.pdf",
    responsibleParty: "John Doe",
    uploadParty: "Team A",
    updateDate: "2023-01-15",
  },
  {
    id: 2,
    phase: "Development",
    status: "pending",
    document: "doc2.pdf",
    responsibleParty: "Jane Smith",
    uploadParty: "Team B",
    updateDate: "2023-02-20",
  },
  {
    id: 3,
    phase: "Testing",
    status: "inactive",
    document: "doc3.pdf",
    responsibleParty: "Mike Johnson",
    uploadParty: "Team C",
    updateDate: "2023-03-10",
  },
  {
    id: 4,
    phase: "Deployment",
    status: "active",
    document: "doc4.pdf",
    responsibleParty: "Sarah Williams",
    uploadParty: "Team D",
    updateDate: "2023-04-05",
  },
  {
    id: 5,
    phase: "Design",
    status: "pending",
    document: "doc5.pdf",
    responsibleParty: "Robert Brown",
    uploadParty: "Team A",
    updateDate: "2023-05-22",
  },
];

// Application settings
export const appSettings = {
  defaultTheme: "light",
  sidebarWidth: 60,
  collapsedSidebarWidth: 60,
  defaultSidebarState: "expanded", // or 'collapsed'
  defaultActiveMenuItem: "home",
};

// Export additional data structures as needed
 */
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
  // { id: "uploadParty", label: "Upload Party", },
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

// Status options for filtering
export const statusOptions = [
  { value: "active", label: "Completed", color: "success" },
  { value: "pending", label: "Not Started", color: "warning" },
  { value: "inactive", label: "Undefined", color: "error" },
  { value: "inProgress", label: "Continuing", color: "error" },
];

// Task status options for sub-rows
export const taskStatusOptions = [
  { value: "completed", label: "Completed", color: "success" },
  { value: "inProgress", label: "Continuing", color: "info" },
  { value: "pending", label: "Not Started", color: "warning" },
  { value: "blocked", label: "Undefined", color: "error" },
];

// Priority options for sub-rows
export const priorityOptions = [
  { value: "high", label: "High", color: "error" },
  { value: "medium", label: "Medium", color: "warning" },
  { value: "low", label: "Low", color: "success" },
];

// Dropdown options for filtering
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
    document: "DesignSpecification.pdf",
    responsibleParty: "John Doe",

    updateDate: "2023-01-15",
    subRows: [
      {
        taskId: 101,
        taskName: "UI Wireframes",
        assignee: "Emma Wilson",
        dueDate: "2023-01-10",
        taskStatus: "completed",
        priority: "high",
        notes: "All wireframes approved in review meeting",
      },
      {
        taskId: 102,
        taskName: "User Flow Diagrams",
        assignee: "Marcus Lee",
        dueDate: "2023-01-12",
        taskStatus: "completed",
        priority: "medium",
        notes: "Final revisions completed",
      },
      {
        taskId: 103,
        taskName: "Design System Updates",
        assignee: "John Doe",
        dueDate: "2023-01-18",
        taskStatus: "inProgress",
        priority: "low",
        notes: "Updating color schemes and typography",
      },
    ],
  },
  {
    id: 2,
    phase: "Development",
    status: "Not Started",
    document: "TechnicalSpecification.pdf",
    responsibleParty: "Jane Smith",

    updateDate: "2023-02-20",
    subRows: [
      {
        taskId: 201,
        taskName: "API Integration",
        assignee: "David Kim",
        dueDate: "2023-02-25",
        taskStatus: "inProgress",
        priority: "high",
        notes: "Working on authentication endpoints",
      },
      {
        taskId: 202,
        taskName: "Frontend Components",
        assignee: "Sarah Wong",
        dueDate: "2023-02-28",
        taskStatus: "pending",
        priority: "medium",
        notes: "Waiting for design assets",
      },
    ],
  },
  {
    id: 3,
    phase: "Testing",
    status: "Undefined",
    document: "TestPlan.pdf",
    responsibleParty: "Mike Johnson",

    updateDate: "2023-03-10",
    subRows: [
      {
        taskId: 301,
        taskName: "Unit Test Framework",
        assignee: "Lisa Chen",
        dueDate: "2023-03-15",
        taskStatus: "blocked",
        priority: "high",
        notes: "Blocked by API dependency issues",
      },
      {
        taskId: 302,
        taskName: "Integration Tests",
        assignee: "Mike Johnson",
        dueDate: "2023-03-20",
        taskStatus: "pending",
        priority: "high",
        notes: "Waiting for unit test completion",
      },
      {
        taskId: 303,
        taskName: "Performance Testing",
        assignee: "James Wilson",
        dueDate: "2023-03-25",
        taskStatus: "pending",
        priority: "medium",
        notes: "Environment setup in progress",
      },
    ],
  },
  {
    id: 4,
    phase: "Deployment",
    status: "Completed",
    document: "DeploymentGuide.pdf",
    responsibleParty: "Sarah Williams",

    updateDate: "2023-04-05",
    subRows: [
      {
        taskId: 401,
        taskName: "CI/CD Pipeline Setup",
        assignee: "Alex Turner",
        dueDate: "2023-04-10",
        taskStatus: "completed",
        priority: "high",
        notes: "Pipeline successfully deployed to staging",
      },
      {
        taskId: 402,
        taskName: "Production Deployment Plan",
        assignee: "Sarah Williams",
        dueDate: "2023-04-15",
        taskStatus: "inProgress",
        priority: "high",
        notes: "Finalizing rollback procedures",
      },
    ],
  },
  {
    id: 5,
    phase: "Design",
    status: "Not Started",
    document: "RevisionNotes.pdf",
    responsibleParty: "Robert Brown",

    updateDate: "2023-05-22",
    subRows: [], // Empty subRows array - will not show expansion arrow
  },
];

// Helper functions
export const getStatusColor = (status) => {
  const statusMap = {
    active: "#4caf50",
    pending: "#ff9800",
    inactive: "#f44336",
    completed: "#4caf50",
    inProgress: "#2196f3",
    blocked: "#f44336",
  };
  return statusMap[status] || "#9e9e9e";
};

export const getPriorityColor = (priority) => {
  const priorityMap = {
    high: "#f44336",
    medium: "#ff9800",
    low: "#4caf50",
  };
  return priorityMap[priority] || "#9e9e9e";
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
