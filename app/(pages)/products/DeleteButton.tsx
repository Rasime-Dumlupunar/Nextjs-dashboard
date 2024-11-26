"use client";

import { deleteProduct } from "@/utils/api";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({id} : {id:number}) => {
  const router = useRouter();

    const handleDelete = () => {
      deleteProduct(id)
      .then(() => {
        // sayfayı yenile (ürünler tekrar alınsın)
        router.refresh();

        //bildirim gönder
        toast.success("Ürün kaldırıldı!!")
      });
    };


  return (
      <button 
      onClick={handleDelete} 
      className="py-1 px-3 bg-[#fed44c] hover:bg-[#f99d0d] rounded-lg">Sil</button>
  )
};

export default DeleteButton;
 