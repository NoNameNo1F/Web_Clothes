import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Category } from "@mui/icons-material";
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="charTitle">{title} </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#191645" />
          <Line type="monotone" dataKey={dataKey} stroke="#43C6AC" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#191645" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
