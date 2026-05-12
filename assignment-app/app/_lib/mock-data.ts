import type { Company, Country, EmissionFactor, Post } from "../_types/emission";

export const countries: Country[] = [
  { code: "KR", name: "South Korea" },
  { code: "US", name: "United States" },
  { code: "DE", name: "Germany" },
];

export const companies: Company[] = [
  {
    id: "c1",
    name: "HanaLoop Manufacturing",
    country: "KR",
    emissions: [
      { yearMonth: "2025-01", source: "electricity", emissions: 42 },
      { yearMonth: "2025-01", source: "raw-material", emissions: 156 },
      { yearMonth: "2025-01", source: "transport", emissions: 55 },

      { yearMonth: "2025-02", source: "electricity", emissions: 46 },
      { yearMonth: "2025-02", source: "raw-material", emissions: 170 },
      { yearMonth: "2025-02", source: "transport", emissions: 62 },

      { yearMonth: "2025-03", source: "electricity", emissions: 39 },
      { yearMonth: "2025-03", source: "raw-material", emissions: 148 },
      { yearMonth: "2025-03", source: "transport", emissions: 58 },

      { yearMonth: "2025-04", source: "electricity", emissions: 44 },
      { yearMonth: "2025-04", source: "raw-material", emissions: 196 },
      { yearMonth: "2025-04", source: "transport", emissions: 72 },

      { yearMonth: "2025-05", source: "electricity", emissions: 47 },
      { yearMonth: "2025-05", source: "raw-material", emissions: 210 },
      { yearMonth: "2025-05", source: "transport", emissions: 80 },

      { yearMonth: "2025-06", source: "electricity", emissions: 43 },
      { yearMonth: "2025-06", source: "raw-material", emissions: 181 },
      { yearMonth: "2025-06", source: "transport", emissions: 69 },
    ],
  },
  {
    id: "c2",
    name: "Globex Mobility",
    country: "DE",
    emissions: [
      { yearMonth: "2025-01", source: "electricity", emissions: 28 },
      { yearMonth: "2025-01", source: "raw-material", emissions: 92 },
      { yearMonth: "2025-01", source: "transport", emissions: 101 },

      { yearMonth: "2025-02", source: "electricity", emissions: 31 },
      { yearMonth: "2025-02", source: "raw-material", emissions: 95 },
      { yearMonth: "2025-02", source: "transport", emissions: 114 },

      { yearMonth: "2025-03", source: "electricity", emissions: 35 },
      { yearMonth: "2025-03", source: "raw-material", emissions: 104 },
      { yearMonth: "2025-03", source: "transport", emissions: 132 },

      { yearMonth: "2025-04", source: "electricity", emissions: 33 },
      { yearMonth: "2025-04", source: "raw-material", emissions: 98 },
      { yearMonth: "2025-04", source: "transport", emissions: 125 },

      { yearMonth: "2025-05", source: "electricity", emissions: 36 },
      { yearMonth: "2025-05", source: "raw-material", emissions: 118 },
      { yearMonth: "2025-05", source: "transport", emissions: 142 },

      { yearMonth: "2025-06", source: "electricity", emissions: 32 },
      { yearMonth: "2025-06", source: "raw-material", emissions: 110 },
      { yearMonth: "2025-06", source: "transport", emissions: 119 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "Quarterly sustainability report",
    resourceUid: "c1",
    dateTime: "2025-03",
    content: "Raw material usage decreased in March after supplier optimization.",
  },
  {
    id: "p2",
    title: "Transport route review",
    resourceUid: "c2",
    dateTime: "2025-05",
    content: "Transport emissions increased due to temporary air freight.",
  },
];

export const emissionFactors: EmissionFactor[] = [
  {
    id: "ef1",
    category: "electricity",
    source: "Grid electricity",
    unit: "kWh",
    factor: 0.456,
    updatedAt: "2025-01-01",
  },
  {
    id: "ef2",
    category: "raw-material",
    source: "Plastic resin",
    unit: "kg",
    factor: 2.35,
    updatedAt: "2025-01-01",
  },
  {
    id: "ef3",
    category: "transport",
    source: "Truck freight",
    unit: "km",
    factor: 0.18,
    updatedAt: "2025-01-01",
  },
];