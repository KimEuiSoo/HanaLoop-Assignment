# HanaLoop Carbon Emissions Dashboard

HanaLoop Frontend Developer Assignment로 제작한 **Carbon Emissions Dashboard**입니다.

이 프로젝트는 기업의 월별 탄소배출량을 시각화하고, 주요 배출 원인과 예상 탄소 비용을 한눈에 파악할 수 있도록 만든 관리자용 대시보드입니다.

대상 사용자는 기업의 **경영진, 관리자, 탄소배출 데이터 실무자**입니다.

---

## Local Run Guide

아래 5단계 이내로 로컬에서 실행할 수 있습니다.

```bash
# 1. repository clone
git clone <repository-url>

# 2. project folder 이동
cd assignment-app

# 3. dependency 설치
yarn install

# 4. production build 생성
yarn build

# 5. production server 실행
yarn start
```

실행 후 아래 주소로 접속합니다.

```bash
http://localhost:3000
```

개발 모드로 실행하려면 아래 명령어를 사용할 수 있습니다.

```bash
yarn dev
```

> `yarn start`는 Next.js의 production server 실행 명령어입니다.  
> 따라서 `yarn start`를 오류 없이 실행하려면 반드시 `yarn build`를 먼저 실행해야 합니다.

---

## Tech Stack

- Next.js App Router
- React
- TypeScript
- CSS Modules
- Recharts
- lucide-react
- Yarn

---

## Project Overview

이 프로젝트는 기업의 탄소배출 데이터를 시각적으로 분석하기 위한 **Carbon Intelligence Dashboard**입니다.

단순히 배출량 데이터를 표로 보여주는 것이 아니라, 경영진과 관리자가 빠르게 의사결정을 할 수 있도록 다음 정보를 중심으로 구성했습니다.

- 총 탄소배출량
- 전월 대비 증감률
- 주요 배출원
- 예상 탄소 비용
- 월별 배출량 추이
- 배출원별 비중
- 데이터 기반 인사이트

---

## Main Features

### Dashboard

Dashboard 화면은 전체 프로젝트의 핵심 화면입니다.

제공 기능은 다음과 같습니다.

- 회사별 탄소배출 데이터 필터링
- 기간별 탄소배출 데이터 필터링
- 총 배출량 KPI 표시
- 전월 대비 증감률 표시
- 가장 큰 배출원 표시
- 예상 탄소 비용 표시
- 월별 배출량 추이 차트
- 배출원별 stacked bar chart
- 배출원 비중 donut chart
- Rule-based carbon insight 제공

---

### Activity Data

Activity Data 화면은 실제 탄소배출량 산정에 필요한 활동량 데이터를 관리하는 화면입니다.

현재 구조에서는 다음과 같은 데이터 입력 확장이 가능합니다.

- 전기 사용량
- 원소재 사용량
- 운송 거리
- 활동량 단위
- 배출계수
- 계산된 CO₂e

---

### Emission Factors

Emission Factors 화면은 탄소배출량 계산에 사용되는 배출계수를 확인하는 화면입니다.

예시 데이터는 다음과 같습니다.

- Grid electricity
- Plastic resin
- Truck freight

각 배출계수는 다음 정보를 가집니다.

- Category
- Source
- Unit
- Factor
- Last Updated

---

### Reports

Reports 화면은 배출량 변화에 대한 설명이나 월별 리포트를 기록하기 위한 화면입니다.

예를 들어 특정 월의 배출량이 증가했을 때, 그 원인을 기록하여 Dashboard의 숫자 데이터만으로는 알기 어려운 맥락을 보완할 수 있습니다.

---

## Folder Structure

```txt
app/
├── page.tsx
├── layout.tsx
├── globals.css
│
├── (main)/
│   ├── layout.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── activity-data/
│   │   └── page.tsx
│   ├── emission-factors/
│   │   └── page.tsx
│   └── reports/
│       └── page.tsx
│
├── _components/
│   ├── layout/
│   │   ├── AppShell.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Topbar.tsx
│   │   └── layout.module.css
│   │
│   ├── dashboard/
│   │   ├── DashboardClient.tsx
│   │   ├── DashboardFilters.tsx
│   │   ├── KpiSection.tsx
│   │   ├── EmissionsTrendChart.tsx
│   │   ├── SourceBreakdownChart.tsx
│   │   ├── SourceDonutChart.tsx
│   │   ├── InsightPanel.tsx
│   │   └── dashboard.module.css
│   │
│   └── common/
│       ├── Badge.tsx
│       ├── LoadingState.tsx
│       └── ErrorState.tsx
│
├── _hooks/
│   └── useEmissionDashboard.ts
│
├── _lib/
│   ├── api.ts
│   ├── mock-data.ts
│   └── emissions.ts
│
└── _types/
    └── emission.ts
```

---

## Folder Design Explanation

### `app/(main)`

`(main)`은 Next.js App Router의 route group입니다.  
URL에는 포함되지 않지만, Dashboard 관련 페이지를 하나의 그룹으로 묶기 위해 사용했습니다.

예를 들어:

```txt
app/(main)/dashboard/page.tsx
```

위 파일의 실제 URL은 다음과 같습니다.

```txt
/dashboard
```

---

### `app/_components`

`_components`는 페이지에서 사용하는 UI 컴포넌트를 모아둔 폴더입니다.

`_` prefix를 사용하여 라우트로 인식되지 않도록 했습니다.

---

### `app/_hooks`

비즈니스 로직과 UI 상태를 분리하기 위해 custom hook을 관리합니다.

현재는 `useEmissionDashboard.ts`에서 다음 상태를 관리합니다.

- companies
- filters
- loading state
- error state
- monthly series
- source breakdown
- dashboard summary
- insight messages

---

### `app/_lib`

데이터, API, 계산 로직을 관리합니다.

| File | Description |
|---|---|
| `api.ts` | fake backend 역할 |
| `mock-data.ts` | seed data 관리 |
| `emissions.ts` | 탄소배출량 집계 및 계산 로직 관리 |

---

### `app/_types`

프로젝트 전역에서 사용하는 TypeScript type을 관리합니다.

---

## System Architecture

이 프로젝트는 다음과 같은 흐름으로 동작합니다.

```txt
User
 │
 │ selects company or period
 ▼
Dashboard Page
 │
 ▼
DashboardClient
 │
 ▼
useEmissionDashboard
 │
 ├── fetchCompanies()
 │
 ├── getFilteredEmissions()
 │
 ├── getMonthlySeries()
 │
 ├── getSourceBreakdown()
 │
 ├── getDashboardSummary()
 │
 └── createInsights()
 │
 ▼
Dashboard UI
 ├── KPI Cards
 ├── Trend Chart
 ├── Source Breakdown Chart
 ├── Donut Chart
 └── Insight Panel
```

---

## Data Flow

```txt
mock-data.ts
   │
   ▼
api.ts
   │
   ▼
useEmissionDashboard.ts
   │
   ▼
emissions.ts
   │
   ▼
Dashboard Components
   │
   ├── KpiSection
   ├── EmissionsTrendChart
   ├── SourceBreakdownChart
   ├── SourceDonutChart
   └── InsightPanel
```

---

## Data Model

### Country

```ts
type Country = {
  code: string;
  name: string;
};
```

---

### Company

```ts
type Company = {
  id: string;
  name: string;
  country: string;
  emissions: GhgEmission[];
};
```

---

### GhgEmission

```ts
type GhgEmission = {
  yearMonth: string;
  source: "electricity" | "raw-material" | "transport";
  emissions: number;
};
```

---

### Post

```ts
type Post = {
  id: string;
  title: string;
  resourceUid: string;
  dateTime: string;
  content: string;
};
```

---

### EmissionFactor

```ts
type EmissionFactor = {
  id: string;
  category: "electricity" | "raw-material" | "transport";
  source: string;
  unit: string;
  factor: number;
  updatedAt: string;
};
```

---

### DashboardFilters

```ts
type DashboardFilters = {
  companyId: string;
  fromMonth: string;
  toMonth: string;
};
```

---

## ERD / Schema Diagram

```txt
┌────────────────────┐
│      Country       │
├────────────────────┤
│ code PK            │
│ name               │
└─────────┬──────────┘
          │
          │ 1:N
          ▼
┌────────────────────┐
│      Company       │
├────────────────────┤
│ id PK              │
│ name               │
│ country FK         │
└─────────┬──────────┘
          │
          │ 1:N
          ▼
┌────────────────────┐
│    GhgEmission     │
├────────────────────┤
│ yearMonth          │
│ source             │
│ emissions          │
│ companyId FK       │
└────────────────────┘


┌────────────────────┐
│      Company       │
├────────────────────┤
│ id PK              │
│ name               │
└─────────┬──────────┘
          │
          │ 1:N
          ▼
┌────────────────────┐
│        Post        │
├────────────────────┤
│ id PK              │
│ title              │
│ resourceUid FK     │
│ dateTime           │
│ content            │
└────────────────────┘


┌────────────────────┐
│   EmissionFactor   │
├────────────────────┤
│ id PK              │
│ category           │
│ source             │
│ unit               │
│ factor             │
│ updatedAt          │
└────────────────────┘
```

---

## Calculation Logic

탄소배출량 계산은 아래 공식을 기준으로 설계했습니다.

```txt
tCO₂e = activity amount × emission factor / 1000
```

예시:

```txt
Electricity usage: 100,000 kWh
Emission factor: 0.456 kgCO₂e/kWh

100,000 × 0.456 / 1000 = 45.6 tCO₂e
```

현재 Dashboard에서는 mock data에 이미 계산된 emissions 값을 넣어두고, 이 값을 기준으로 월별 합계와 배출원별 합계를 계산합니다.

---

## Dashboard Calculation Details

### Total Emissions

```txt
selected emissions의 emissions 값을 모두 합산
```

---

### MoM Change

```txt
(latestMonthTotal - previousMonthTotal) / previousMonthTotal × 100
```

---

### Top Source

```txt
electricity, raw-material, transport 중 합계가 가장 큰 source
```

---

### Estimated Carbon Cost

```txt
total emissions × carbon tax rate
```

현재 프로젝트에서는 아래 값을 가정했습니다.

```txt
carbon tax rate = ₩25,000 / tCO₂e
```

---

## UI / UX Design Rationale

이 프로젝트는 기업용 SaaS 대시보드처럼 보이도록 설계했습니다.

### Layout

왼쪽에는 navigation drawer를 배치하고, 오른쪽에는 주요 콘텐츠 영역을 구성했습니다.

Dashboard에서는 정보 우선순위를 다음 순서로 구성했습니다.

```txt
KPI Summary
→ Main Trend Chart
→ Carbon Insight
→ Source Breakdown
```

경영진은 세부 데이터보다 전체 현황과 리스크를 먼저 확인해야 한다고 판단했기 때문에 KPI 영역을 가장 상단에 배치했습니다.

---

### Color System

```txt
Dark Navy  : 전문적인 B2B SaaS 느낌
Green      : sustainability, carbon management
Amber      : attention, risk, warning
White/Gray : 데이터 가독성
```

---

### Component Design

반복적으로 사용되는 UI는 컴포넌트화했습니다.

- Sidebar
- Topbar
- Badge
- LoadingState
- ErrorState
- KPI Card
- Chart Components
- Insight Panel

이를 통해 페이지 코드가 복잡해지는 것을 줄이고, UI 재사용성을 높였습니다.

---

## Loading and Error Handling

`api.ts`에서는 실제 backend API를 호출하는 상황을 가정하여 latency를 추가했습니다.

```ts
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const jitter = () => 200 + Math.random() * 600;
```

write operation에는 일정 확률로 실패하는 로직을 추가할 수 있도록 구성했습니다.

```ts
const maybeFail = () => Math.random() < 0.15;
```

이를 통해 다음 상황을 고려했습니다.

- loading state
- error state
- partial failure
- retry 가능성
- 사용자 피드백 메시지

---

## Rendering and State Management

Dashboard의 상태 관리는 `useEmissionDashboard` custom hook에서 담당합니다.

이 hook은 다음 책임을 가집니다.

- 데이터 요청
- 로딩 상태 관리
- 에러 상태 관리
- 필터 상태 관리
- 필터링된 배출량 계산
- 월별 차트 데이터 생성
- 배출원별 데이터 생성
- KPI summary 계산
- insight 문장 생성

계산 결과는 `useMemo`를 사용하여 필요한 값이 변경될 때만 다시 계산되도록 구성했습니다.

---

## Trade-offs

시간 제한을 고려하여 다음 부분은 단순화했습니다.

- 실제 backend API 대신 fake backend 사용
- 실제 database 대신 in-memory mock data 사용
- 인증 기능 제외
- 사용자 권한 관리 제외
- 실제 AI API 대신 rule-based insight 사용
- Settings 페이지는 disabled 상태로 표시
- Activity Data 입력 저장 로직은 확장 가능한 구조로 설계

대신 과제의 평가 기준에 맞춰 다음 부분에 집중했습니다.

- App Router 기반 폴더 구조
- TypeScript type 분리
- UI 컴포넌트 분리
- 데이터 계산 로직 분리
- 대시보드 UX 완성도
- README 문서화
- production build 및 `yarn start` 실행 가능성

---

## AI Tool Usage

본 과제를 수행하는 과정에서 AI 도구를 사용했습니다.

### Used Tool

- ChatGPT

### Usage Details

AI 도구는 다음 작업에 보조적으로 사용했습니다.

- 과제 요구사항 해석
- Carbon Emissions Dashboard 화면 구성 아이디어 정리
- Next.js App Router 폴더 구조 설계 검토
- README 문서 초안 작성
- TypeScript type 구조 검토
- 컴포넌트 분리 방향 검토
- UI 문구 및 설계 설명 문장 개선
- 에러 상황에 대한 원인 분석 보조

### Human Decision

최종적인 프로젝트 구조, 디자인 방향, 기능 범위, 코드 적용 여부는 직접 판단하여 결정했습니다.

AI가 생성한 내용은 그대로 제출하기보다 과제 요구사항과 프로젝트 목적에 맞게 수정하여 사용했습니다.

---

## Available Routes

| Route | Description |
|---|---|
| `/` | `/dashboard`로 redirect |
| `/dashboard` | 메인 탄소배출 대시보드 |
| `/activity-data` | 활동량 데이터 관리 화면 |
| `/emission-factors` | 배출계수 확인 화면 |
| `/reports` | 월별 리포트 및 특이사항 화면 |

---

## Commit Strategy

커밋은 아래와 같은 흐름을 기준으로 작성했습니다.

```txt
feat: initialize Next.js app router project
feat: add dashboard layout and sidebar navigation
feat: add emissions mock data and calculation utilities
feat: implement dashboard KPI and charts
feat: add emission factors page
feat: add reports page
docs: add README with setup and architecture
```

---

## Testing Checklist

제출 전 아래 항목을 확인했습니다.

```txt
[ ] yarn install 정상 실행
[ ] yarn build 정상 실행
[ ] yarn start 정상 실행
[ ] http://localhost:3000 접속 가능
[ ] /dashboard 접속 가능
[ ] /activity-data 접속 가능
[ ] /emission-factors 접속 가능
[ ] /reports 접속 가능
[ ] README 로컬 실행 방법 5단계 이내 작성
[ ] README AI 도구 사용 내역 작성
[ ] README 시스템 설계 설명 작성
[ ] README ERD 또는 스키마 다이어그램 작성
```

---

## Final Notes

이 프로젝트는 기능 개수를 많이 늘리는 것보다, 작은 범위 안에서 실제 서비스처럼 보이는 구조와 UX를 만드는 것에 집중했습니다.

특히 경영진과 관리자가 탄소배출 데이터를 빠르게 이해하고, 주요 배출 원인과 비용 리스크를 판단할 수 있도록 Dashboard 화면을 구성했습니다.

```txt
Data → Calculation → Visualization → Insight
```

위 흐름을 중심으로 데이터가 단순 수치에 머무르지 않고, 의사결정에 도움이 되는 정보로 보이도록 설계했습니다.