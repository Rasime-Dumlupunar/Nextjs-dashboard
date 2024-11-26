import { getOrders } from "@/utils/api";
import Graph from "./Graph";
import { wait } from "@/utils/wait";


const SalesGraph = async () => {
  
  const data = await getOrders();
  await wait();
  return (
    <div className=" bg-white rounded-lg p-5 mr-5 mt-3">
      <h2 className="font-semibold text-lg">Satış Detayları</h2>
        <Graph  data={data} />
    </div>
  ); 
}; 

export default SalesGraph;
