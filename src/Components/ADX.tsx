import B from "../../public/image/B.svg";
import background from "../../public/image/bg-analytis.svg";
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line, Rectangle } from "recharts";
import Footer from "./Footer";

// Dữ liệu mẫu
const data = [
  { date: "02-01", open: 102, high: 106, low: 100, close: 104, volume: 1200, rsi: 31 },
  { date: "02-02", open: 104, high: 108, low: 103, close: 107, volume: 1500, rsi: 50 },
  { date: "02-03", open: 107, high: 110, low: 106, close: 109, volume: 1100, rsi: 80 },
  { date: "02-04", open: 109, high: 112, low: 107, close: 108, volume: 1300, rsi: 60 },
  { date: "02-05", open: 108, high: 110, low: 105, close: 106, volume: 1400, rsi: 40 },
  { date: "02-03", open: 107, high: 110, low: 106, close: 109, volume: 1100, rsi: 80 },
  { date: "02-04", open: 109, high: 112, low: 107, close: 108, volume: 1300, rsi: 60 },
  { date: "02-05", open: 108, high: 110, low: 105, close: 106, volume: 1400, rsi: 40 },
];

const CustomCandle = ({ x, open, close, high, low, width }) => {

  const isUp = close > open;
  return (
    <g>
      {/* Đường thẳng nối giá cao nhất - thấp nhất */}
      <line x1={x + width / 2} x2={x + width / 2} y1={high} y2={low} stroke={isUp ? "#00ff99" : "#ff4444"} strokeWidth={2} />
      {/* Thân nến */}
      <Rectangle x={x} y={Math.min(open, close)} width={width} height={Math.abs(open - close)} fill={isUp ? "#00ff99" : "#ff4444"} />
    </g>
  );
};

type Props = {};

const ADX = (props: Props) => {
  return (
    <body className="bg-[#06001C] text-white font-sans">
      <div className=" rounded-2xl bg-crypto-panel relative overflow-hidden border-b-2 border-[#2B2B2B] shadow-lg shadow-blue-300/50">
        <div className=" flex justify-between items-start border border-[#2B2B2B] rounded-xl space-x-2 ">
          <img src={background} alt="" className="relative w-full" />
          <div className="border absolute w-[50%] flex mt-[17%] ml-[26%] shadow-amber-50  backdrop-blur-md">
          <div className=" ml-3.5 mt-[6%]">
            <h2 className="text-xl font-bold ml-5">BTC/USDT</h2>
            <p className="text-xl font-bold text-teal-400 ml-5">$98.295,99</p>
            <p className="text-teal-400 flex items-center ml-5 text-lg">
              <span className=" mr-1">▲</span>4.34%
            </p>
            <p className="text-lg mt-2 ml-5">RSI: 62</p>
          </div>
          
          <div className="absolute ml-[68%] rounded-full w-20 h-20 mt-[10%] flex items-center justify-center border-1 border-white">
            <img src={B} alt="" className="w-16 h-16" />
          </div>
          </div>
        </div>

        <div className="absolute bottom-1 right-2 text-lg font-mono text-white mt-3.5">
          Trading Pair
        </div>
      </div>

      <div className="flex justify-between text-xs mt-3.5 mx-4 p-2">
        <div className=" font-mono text-lg font-normal">
          Price: <span className="text-white font-bold">$98,295.99</span>
        </div>
        <div className=" font-mono text-lg font-normal">
          ADI: <span className="text-white font-bold">31</span>
        </div>
        <div className=" font-mono text-lg font-normal">
          Volume: <span className="text-white font-bold">41.3B</span>
        </div>
        <div className="bg-gray-700 px-2 rounded flex items-center text-lg">
          30M{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400} >
      <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis dataKey="date" stroke="#888" />
        <YAxis yAxisId="left" domain={[100, 112]} stroke="#ccc" />
        <YAxis yAxisId="right" orientation="right" domain={[0, 100]} stroke="#ccc" />
        <Tooltip />

        {/* Biểu đồ nến */}
        {data.map((d, i) => (
          <CustomCandle key={i} x={i * 50} {...d} width={10} />
        ))}

        {/* Biểu đồ khối lượng giao dịch */}
        <Bar yAxisId="left" dataKey="volume" fill="#8884d8" />

        {/* RSI */}
        <Line yAxisId="right" type="monotone" dataKey="rsi" stroke="#0088ff" dot={{ r: 4 }} />
      </ComposedChart>
    </ResponsiveContainer>

      <Footer />
    </body>
  );
};

export default ADX;
