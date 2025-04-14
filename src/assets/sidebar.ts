import { CalendarMonth, Home, HomeOutlined, Person, PersonOutlined } from "@mui/icons-material";

export const SidebarData = [
  {
    label: "Dashboard",
    icon: HomeOutlined,
    url: "/dashboard",
  },
  {
    label: "Employee Management",
    icon: PersonOutlined,
    isModuleIncluded: true,
    modules: [
      {
        label: "Employee List",
        icon: Person,
        url: "/employee-management/employee-list",
      },
      {
        label: "Add Employee",
        icon: Person,
        url: "/employee-management/add-list",
      },
      {
        label: "Departments",
        url: "/employee-management/departments",
      },
      {
        label: "Designations",
        url: "/employee-management/designation",
      },
    ],
  },
];
