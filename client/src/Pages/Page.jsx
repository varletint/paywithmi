import Sidebar from "../compponents/Sidebar/Sidebar";
import Dashboard from "../compponents/Dashboard/Dashboard";
export default function Home() {
  return (
    <div className='grid gap-4 p-4 lg:grid-cols-[220px,_1fr] sm:grid-cols-[200px,_1fr]'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}
