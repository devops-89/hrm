import { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";
import { USER_STATUS } from "./enum";

export interface LayoutProps {
  children: ReactNode;
}

export interface NUMBERCARDPROS {
  heading: string;
  icon: ElementType;
  totalCount: string;
  count: string;
}

export interface BREADCRUMBS_DATA {
  label: string;
  url?: string;
}

export interface BREADCRUMBS_PROPS {
  data: BREADCRUMBS_DATA[];
}

export interface DEPARTMENT_TABLE_DATA {
  name: string;
  employees: number;
  status: string;
}

export interface DESIGNATIONS_DATA {
  designation: string;
  departmentName: string;
  employees: string;
  status: string;
}

export interface CHIP_COMPONENT {
  label: string;
}

export interface EMPLOYEE_DATA {
  id: string;
  name: string;
  avatar: StaticImageData;
  department: string;
  email: string;
  phoneNumber: string;
  designation: string;
  joiningDate: EpochTimeStamp;
  status: USER_STATUS;
}
