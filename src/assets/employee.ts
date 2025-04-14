import { EMPLOYEE_DATA } from "@/utils/types";
import user from "@/user-32.webp";
import { USER_STATUS } from "@/utils/enum";
export const EMPLOYEE: EMPLOYEE_DATA[] = [
  {
    id: "Emp-001",
    name: "Kunal Sharma",
    avatar: user,
    department: "IT",
    designation: "Frontend Developer",
    email: "Kunal.sharma@digixito.com",
    phoneNumber: "+91 9354678205",
    status: USER_STATUS.ACTIVE,
    joiningDate: 1744655962,
  },
];
