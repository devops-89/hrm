import { USER_STATUS } from "@/utils/enum";
import { DESIGNATIONS_DATA } from "@/utils/types";

export const DesignationData: DESIGNATIONS_DATA[] = [
  {
    designation: "Sales Executive Officer",
    departmentName: "Sales",
    employees: "10",
    status: USER_STATUS.ACTIVE,
  },
  {
    designation: "Accountant",
    departmentName: "Finance",
    employees: "10",
    status: USER_STATUS.INACTIVE,
  },
  {
    designation: "Designer",
    departmentName: "UI / UX",
    employees: "10",
    status: USER_STATUS.ACTIVE,
  },
  {
    designation: "SEO Analyst",
    departmentName: "Marketing",
    employees: "10",
    status: USER_STATUS.INACTIVE,
  },
  {
    designation: "Technician",
    departmentName: "IT Management",
    employees: "10",
    status: USER_STATUS.ACTIVE,
  },
  {
    designation: "Business Analyst",
    departmentName: "Business Development",
    employees: "10",
    status: USER_STATUS.ACTIVE,
  },
  
];

export const DesignationTableHeader = [
  {
    label: "Designation",
  },
  {
    label: "Department",
  },
  {
    label: "No of Employees",
  },
  {
    label: "Status",
  },
];
