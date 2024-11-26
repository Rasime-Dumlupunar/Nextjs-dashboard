import { Order, Product, Users } from "@/types";


export const getOrders = async (): Promise<Order[]> => {
    try {
      const res = await fetch("http://localhost:3090/orders");
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Siparişler alınırken bir sorun oluştu");
    }
  };

  export const getProducts = async (): Promise<Product[]> => {
    try {
      const res = await fetch("http://localhost:3090/products?_sort=-id", {
        cache: "no-store",
      });
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürün verileri alınırken bir sorun oluştu");
    }
  };
  

  export const deleteProduct = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:3090/products/${id}`, {
        method: "DELETE",
      });
  
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürünü silerken oluştu");
    }
  };
  
  export const createProduct = async (data: Product) => {
    try {
      const res = await fetch(`http://localhost:3090/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürün eklenirken oluştu");
    }
  };
  
  export const getProductById = async (id: string): Promise<Product> => {
    try {
      const res = await fetch(`http://localhost:3090/products/${id}`, {
        cache: "no-store",
      });
  
      
  
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await res.json();
      } else {
        throw Error("Geçersiz JSON formatı!");
      }
    } catch (err) {
      console.error("Hata:", err);
      throw Error("Ürün verileri alınırken bir sorun oluştu!");
    }
  }; 

    
  export const editProduct = async (data:Product) => {
    try {
      const res = await fetch(`http://localhost:3090/products/${data.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
  
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürün bulunamadı!");
    }
  }; 

  export const getUsers = async () : Promise<Users[]>=> {
    try {
      const res = await fetch(`http://localhost:3090/users`, {
        cache: "no-store", 
      });
      
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürün eklenirken oluştu!"); 
    }
  }; 

  export const deleteUsers = async (id:string) => {
    try {
      const res = await fetch(`http://localhost:3090/users/${id}`, {
        method: "DELETE",
      });
      
      return res.json();
    } catch (err) {
      console.log(err);
      throw Error("Ürün silinirken bir sorun oluştu!"); 
    }
  }; 

  export const getUserById = async (id: string) : Promise<Users> => {
    try {
      const res = await fetch(`http://localhost:3090/users/${id}`);
      return res.json();
    } catch (err) {
      throw Error("Kullanıcı bulunamadı!"); 
    }
  }; 

  export const getValues = async () => {
    const orderData = await getOrders() || [];
    const userData = await getUsers() || [];
    const productData = await getProducts() || [];


    console.log(orderData);
    return {
      totalUser:userData.length * 109,
      totalOrder: orderData.reduce(
        (a, b) => a + b.items.reduce((c, d) => c + d.quantity, 0),
        0
      ) * 63 ,
      totalIncome: 
      "$" + orderData.reduce(
        (incomeTotal, order) => 
          incomeTotal + order.items.reduce((itemIncome, item) => itemIncome + (item.price || 0), 0),
        0
      ).toFixed(2),
      productsCount: productData.length *204,
    };
  }; 