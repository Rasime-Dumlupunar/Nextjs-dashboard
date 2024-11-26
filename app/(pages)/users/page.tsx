import Table from "@/components/table";
import Title from "@/components/title";
import { Suspense } from "react";
import Loading from "../loading";
import Modal from "./modal";

type Props = {
  searchParams: Record<string,string> | undefined | null;
}
const Users = async ({searchParams} : Props) => {
  console.log(searchParams);

  return (
    <div>
      <Title> Kullanıcılar</Title>
      <Suspense fallback={<Loading designs="mt-20"/>}>
      <Table/>
      </Suspense>
      {/* eğer url'de show parametresi varsa ekrana modal bas*/} 

      {searchParams?.show && <h1> <Modal id={searchParams.show} /></h1>}
    </div>
  )
};

export default Users;
