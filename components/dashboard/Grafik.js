import { Line, Pie } from "react-chartjs-2";
import { lineChrt, sum } from "../../utils/library";

const Grafik = (props) => {
  console.log('pie data', props.statistik)

  const dataLineChart = lineChrt(props.statistik);
  const chartLine = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const chartPie = {
    labels: ["Positif", "Sembuh", "Meninggal", "Dirawat"],
    datasets: [
      {
        label: "My First Dataset",
        data: [sum("positif", props), sum("sembuh", props), sum("meninggal", props), sum("dirawat", props)],
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
          <div className="card-header">{props.isGlobal ? 'Kasus Virus Corona di Dunia' : 'Kasus Virus Corona di Indonesia'}</div>
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
