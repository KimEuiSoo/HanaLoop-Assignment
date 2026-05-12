import { emissionFactors } from "../../_lib/mock-data";
import Badge from "../../_components/common/Badge";

export default function EmissionFactorsPage() {
  return (
    <div className="page">
      <section className="page-header">
        <div>
          <p className="page-eyebrow">Reference Data</p>
          <h1 className="page-title">Emission Factors</h1>
          <p className="page-description">
            Activity data is converted into CO₂e using these factors.
          </p>
        </div>

        <Badge tone="green">kgCO₂e based</Badge>
      </section>

      <section className="card">
        <div className="card-header">
          <h2 className="card-title">Factor table</h2>
          <p className="card-description">
            Transparent assumptions for carbon calculation.
          </p>
        </div>

        <div className="card-body table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Source</th>
                <th>Unit</th>
                <th>Factor</th>
                <th>Last Updated</th>
              </tr>
            </thead>

            <tbody>
              {emissionFactors.map((factor) => (
                <tr key={factor.id}>
                  <td>{factor.category}</td>
                  <td>{factor.source}</td>
                  <td>{factor.unit}</td>
                  <td>
                    {factor.factor} kgCO₂e/{factor.unit}
                  </td>
                  <td>{factor.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}