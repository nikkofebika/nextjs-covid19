import { Line, Pie } from "react-chartjs-2";

const Grafik = (props) => {
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
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            {props.isGlobal ? (
              <Line data={chartLine} />
            ) : (
              <Pie data={chartPie} />
            )}
          </div>
          <div className="card-footer d-flex justify-content-between text-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Grafik;
