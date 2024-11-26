import TableContainer from "@/components/table/TableContainer";
import Title from "@/components/title";
import { getOrders } from "@/utils/api";
import { Suspense } from "react";

const Orders = () => {
  return (
    <div>
      <Title> Siparişler </Title>
      <Suspense>
      <List/>
      </Suspense>
    </div>
  );
};

const List = async () => {
  const data = await getOrders();
  const colors = {
    Shipped: "bg-green-600",
    Delivered: "bg-blue-600",
    Processing: "bg-yellow-600",
    Pending: "bg-red-600",
  };

  return (
    <TableContainer>
      <thead className="border-b shadow">
        <tr className="text-sm">
          <th className="py-3">Sipariş Id</th>
          <th>Toplam Fiyat</th>
          <th>Ürün Sayısı</th>
          <th>Sipariş Tarihi</th>
          <th>Nereye</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {data.map((order, key) => 
        <tr key={key} className="text-sm">
          <td>{order.orderId}</td>
          <td className="text-green-600 font-semibold">${order.totalAmount}</td>
          <td>{order.items.reduce((a,b) => a+b.quantity, 0)}</td>
          <td className="whitespace-nowrap">{new Date(order.orderDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "long", 
            year: "2-digit",
          })}</td>
          <td>{order.shippingAddress.city}</td>
          <td >
            <span className={`${colors[order.orderStatus]
            } py-1 px-2 text-white rounded-lg shadow`}>
              {order.orderStatus}</span>
            </td>
        </tr>
      )}
      </tbody>
    </TableContainer>
  )
}

export default Orders;
