import { Line, Pie } from "react-chartjs-2";
import { lineChrt, sum } from "../../utils/library";

const Grafik = (props) => {
  const dataLineChart = lineChrt(props);
  const chartLine = {
    labels: dataLineChart.label,
    datasets: [
      {
        label: "Meninggal",
        data: dataLineChart.meninggal,
        fill: false,
        backgroundColor: "rgb(111, 12, 132)",
        borderColor: "rgba(90, 33, 122, 0.2)",
      },
      {
        label: "Positif",
        data: dataLineChart.positif,
        fill: false,
        backgroundColor: "rgb(235, 42, 66)",
        borderColor: "rgba(57, 99, 24, 0.2)",
      },
      {
        label: "Sembuh",
        data: dataLineChart.sembuh,
        fill: false,
        backgroundColor: "rgb(665, 67, 123)",
        borderColor: "rgba(123, 99, 132, 0.2)",
      },
      {
        label: "Active",
        data: dataLineChart.active,
        fill: false,
        backgroundColor: "rgb(255, 99, 423)",
        borderColor: "rgba(33, 42, 133, 0.2)",
      },
    ],
  };

  const chartPie = {
    labels: ["Positif", "Sembuh", "Meninggal", "Dirawat"],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          sum("positif", props),
          sum("sembuh", props),
          sum("meninggal", props),
          sum("dirawat", props),
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 111, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            {props.isGlobal
              ? "Kasus Virus Corona di Dunia"
              : "Kasus Virus Corona di Indonesia"}
          </div>
          <div className="card-body">
            {props.isGlobal ? (
              <Pie data={chartPie} />
            ) : (
              <Line data={chartLine} />
            )}
          </div>
          {/* <div className="card-footer d-flex justify-content-between text-center">
            <div>
              <h5>POSITIF</h5>
              <h2>25000</h2>
              <p>Orang</p>
            </div>
            <div>
              <h5>POSITIF</h5>
              <h2>25000</h2>
              <p>Orang</p>
            </div>
            <div>
              <h5>POSITIF</h5>
              <h2>25000</h2>
              <p>Orang</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Grafik;
