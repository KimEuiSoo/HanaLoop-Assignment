export default function ReportsPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div>
          <p className="page-eyebrow">Narrative Layer</p>
          <h1 className="page-title">Reports</h1>
          <p className="page-description">
            Monthly notes linked to emission changes.
          </p>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h2 className="card-title">Recent reports</h2>
          <p className="card-description">
            Explain abnormal emission spikes and reduction plans.
          </p>
        </div>

        <div className="card-body">
          <p className="page-description">
            리포트 작성 및 수정 기능을 넣을 수 있는 페이지입니다.
          </p>
        </div>
      </section>
    </div>
  );
}