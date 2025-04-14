import { ATTENDANCE_STATUS, USER_STATUS } from "@/utils/enum";
import {
  PeopleAltOutlined,
  PersonOutlined,
  Settings,
} from "@mui/icons-material";

export const data = {
  countCardProps: [
    {
      icon: PersonOutlined,
      heading: "Total Employee",
      count: "5%",
      totalCount: "50",
    },
    {
      icon: PeopleAltOutlined,
      heading: "Total Client",
      count: "4%",
      totalCount: "140",
    },
    {
      icon: Settings,
      heading: "Total Projects",
      count: "5%",
      totalCount: "100",
    },
  ],
  meetingDataHeader: [
    {
      label: "Meeting Title",
    },
    {
      label: "Meeting Date",
    },
    {
      label: "Meeting Time",
    },
  ],
  meetingTableData: [
    {
      title: "Project Kickoff",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Weekly Team Sync",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Client Presentation",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Monthly Review",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Weekly Review",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Yearly Meeting",
      date: 1743419720,
      time: "10:00 AM",
    },
    {
      title: "Strategy Planning",
      date: 1743419720,
      time: "10:00 AM",
    },
  ],
  absentTableHeader: [
    {
      label: "Employee",
    },
    {
      label: "Status",
    },
  ],

  absentTableData: [
    {
      name: "Kunal Sharma",
      status: ATTENDANCE_STATUS.ABSENT,
    },
    {
      name: "Himanshu Rajput",
      status: ATTENDANCE_STATUS.ABSENT,
    },
    {
      name: "Savita Singh",
      status: ATTENDANCE_STATUS.ABSENT,
    },
  ],
  departmentTableHeader: [
    {
      label: "Department",
    },
    {
      label: "No of Employees",
    },
    {
      label: "Status",
    },
  ],

  departmentTableData: [
    {
      name: "IT Department",
      employees: 15,
      status: USER_STATUS.ACTIVE,
    },
    {
      name: "Sales & Marketing",
      employees: 4,
      status: USER_STATUS.ACTIVE,
    },
    {
      name: "Digital Marketing",
      employees: 5,
      status: USER_STATUS.ACTIVE,
    },

    {
      name: "Graphic Designing Department",
      employees: 3,
      status: USER_STATUS.ACTIVE,
    },
    {
      name: "Finance",
      employees: 10,
      status: USER_STATUS.INACTIVE,
    },
    {
      name: "Account Management",
      employees: 14,
      status: USER_STATUS.INACTIVE,
    },
    {
      name: "Business Development",
      employees: 7,
      status: USER_STATUS.ACTIVE,
    },
    {
      name: "Administration",
      employees: 5,
      status: USER_STATUS.INACTIVE,
    },
  ],

  statusArray: [
    {
      label: USER_STATUS.ACTIVE,
    },
    {
      label: USER_STATUS.INACTIVE,
    },
  ],
};
