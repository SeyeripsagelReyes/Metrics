import "./Workload.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Emp 1",
    av: 10,
    sp: 60
  },
  {
    name: "Emp 2",
    av: 6,
    sp: 30
  },
  {
    name: "Emp 3",
    av: 12,
    sp: 40
  },
  {
    name: "Emp 4",
    av: 7,
    sp: 50
  },
  {
    name: "Emp 5",
    av: 10,
    sp: 40
  },
];

const Workload = () => {
  return (
    <div className="workload">
      <div className="title">WORKLOAD</div>
      <ResponsiveContainer width="100%" aspect="2">
        <BarChart
          layout='vertical'
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type='number' />
          <YAxis dataKey="name" type='category'/>
          <Tooltip />
          <Legend />
          <Bar dataKey="sp" name="Story Points" stackId="a" fill="#7497ad" />
          <Bar dataKey="av" name="Average" stackId="a" fill="#e14241" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Workload;
