import { getUsers } from "@/utils/api";
import DeleteButtonn from "./DeleteButton";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import TableContainer from "./TableContainer";

const Table = async () => {
    const data = await getUsers();
  
  return (
        <TableContainer>
        <thead >
            <tr className="text-sm border-b shadow ">
                <th className="py-4 ">#</th>
                <th>İsim</th>
                <th>E-posta</th>
                <th>Ülke</th>
                <th>Şehir</th>
                <th>Eylem</th>
            </tr>
        </thead>
        <tbody>
            {data.map((user, key) => (
                <tr key={user.id} className="text-sm border-b">
                    <td className="py-8 ">{key}</td>
                    <td >{user.name}</td>
                    <td>{user.email}</td>
                    <td >{user.address.country}</td>
                    <td>{user.address.city}</td>
                    <td className="flex py-8 justify-center gap-2">
                        <Link href={`?show=${user.id}`} className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"> 
                            <FaEye/>
                        </Link>
                    <DeleteButtonn id={user.id}/>
                    </td>
                </tr>
            ))}
        </tbody>
        </TableContainer>
  )
};

export default Table;
