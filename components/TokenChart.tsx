import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { time: '12:00', price: 3450 },
  { time: '12:05', price: 3460 },
  { time: '12:10', price: 3440 },
  { time: '12:15', price: 3470 },
  { time: '12:20', price: 3490 },
  { time: '12:25', price: 3480 },
];
export default function TokenChart() {
  return (
    <div className="glass neon-border p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-xl font-orbitron neon-yellow mb-4">Token Price Chart</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#00fff7" tick={{fill:'#00fff7',fontFamily:'Orbitron'}}/>
          <YAxis stroke="#a259ff" tick={{fill:'#a259ff',fontFamily:'Orbitron'}}/>
          <Tooltip contentStyle={{background:'#181c2b',border:'1px solid #00fff7',color:'#fff'}}/>
          <Line type="monotone" dataKey="price" stroke="#ff00e0" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 