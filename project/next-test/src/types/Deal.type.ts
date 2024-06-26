export type TDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  location: string;
  likesCount: number;
} & (IsDetail extends true
  ? {
      seller: Seller;
      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});

interface Seller {
  avatarImgURL: string;
  email: string;
}
