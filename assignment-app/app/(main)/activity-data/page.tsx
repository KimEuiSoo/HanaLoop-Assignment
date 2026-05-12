export default function ActivityDataPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div>
          <p className="page-eyebrow">Operator Workspace</p>
          <h1 className="page-title">Activity Data</h1>
          <p className="page-description">
            Enter electricity, raw material, and transport activity data.
          </p>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <h2 className="card-title">Activity data form</h2>
          <p className="card-description">
            This page can be expanded with validation and save logic.
          </p>
        </div>

        <div className="card-body">
          <p className="page-description">
            활동량 입력 페이지입니다. 추후 입력 폼과 테이블을 추가하면 됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}