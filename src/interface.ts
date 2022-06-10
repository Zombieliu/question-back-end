
export interface IUserOptions {
  uid: number;
  url: string;
}

export interface Web2UserAndKey {
  description?:string;
  email: string;
  publicKey:string;
  secretKey:string;
}

export interface transfer_info {
  near_address:string;
  receiverId:string;
  amount:string;
}

export interface content {
  content:string;
  content_index:number;
  question:string;
  selected:string;
  season:string;
}

export interface users_history_record {
  email: string;
  near_address:string;
  content:string;
  content_index:number;
  season:string;
}

export interface Buy_season {
  email: string;
  near_address:string;
  season:string;
  season_url:string;

}



export interface Web2UserKey {
  key:string
}

export interface Web2UserEmail {
  email:string
}

export interface user_swap_tokenA_to_usn {
  near_address:string;
  amount_in:string;
}
