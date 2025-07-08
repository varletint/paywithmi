import Sidebar from "../compponents/Sidebar/Sidebar";
import Dashboard from "../compponents/Dashboard/Dashboard";
import { useSelector } from "react-redux";
export default function Home() {
  // const { currentUser } = useSelector((state) => state.user);
  return (
    <div
      className='grid gap-4 p-4 lg:grid-cols-[220px,_1fr]
      sm:grid-cols-[200px,_1fr]'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

{
  /* <div
  className='grid gap-4 p-4 
lg:grid-cols-[220px,_1fr] sm:grid-cols-[200px,_1fr]'>
  <Sidebar />
  <Dashboard />
</div>; */
}
