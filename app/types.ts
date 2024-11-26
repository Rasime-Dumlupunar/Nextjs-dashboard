export type Order ={
        orderId: number,
        userId: number,
        orderDate: string,
        totalAmount: number,
        orderStatus: "Shipped" | "Delivered" | "Processing" | "Pending"; 
        shippingAddress: {
        street: string,
        city: string,
        state: string,
        postalCode: string,
        country: string,
        },
        items: [
            {
            productId: number,
            name: string
            quantity: number,
            price: number,
            }
        ],
        id: string,
    };

export type Product = {
            id: number,
            name: string,
            description: string,
            price: number,
            discountPrice: number
            category: string,
            brand: string,
            stock: number,
            rating: number,
            images:string[],
            tags: "Bluetooth" | "Kablosuz" | "Kulaklık",
          };


          export type Users = {
            id: string,
             name: string,
             email: string,
             password: string,
             phone: string,
             address: { 
                street: string,
               city: string,
               state: string,
               postalCode: string,
               country: string,
             },
             orderHistory: UserOrder[];
     };

     export type UserOrder = [
        {
            orderId: number,
            productId: number,
            quantity: number,
            totalPrice: number,
            orderDate: string,
          },
          {
            orderId: number;
            productId: number;
            quantity: number;
            totalPrice: number;
            orderDate: string;
          }
        ];