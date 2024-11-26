"use client";
import { deleteUsers } from '@/utils/api';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const DeleteButtonn = ({id} : {id:string}) => {
    const router = useRouter();
    //kullanıcı hesabını sil
    const handleDelete = () => {
        deleteUsers(id)
        .then(() => {
            router.refresh();
            toast.success("Kullanıcı hesabı kaldırıldı");

        })
        .catch(() => {
            toast.error("Kullanıcı hesabı kaldırılamadı!");
        });
    };
  return (
    <div>
      <button 
      onClick={handleDelete}
      className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition">
        <FaTrash className="text-red-500"/>
      </button>
    </div> 
                
  ) 
}

export default DeleteButtonn;
