export type Country = {
  code: string;
  name: string;
};

export type EmissionSource = "electricity" | "raw-material" | "transport";

export type GhgEmission = {
  yearMonth: string;
  source: EmissionSource;
  emissions: number;
};

export type Company = {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
};

export type Post = {
  id: string;
  title: string;
  resourceUid: string;
  dateTime: string;
  content: string;
};

export type EmissionFactor = {
  id: string;
  category: EmissionSource;
  source: string;
  unit: string;
  factor: number;
  updatedAt: string;
};

export type DashboardFilters = {
  companyId: string;
  fromMonth: string;
  toMonth: string;
};