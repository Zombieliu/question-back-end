// import { Provide } from '@midwayjs/decorator';
// import { InjectEntityModel } from '@midwayjs/orm';
// import { NearUser } from '../entity/near';
// import { Repository } from 'typeorm';
// import {Pet_number} from "../entity/pet_number";
//
// @Provide()
// export class PetNetworkModelService {
//   @InjectEntityModel(Pet_number)
//   pet_number_Model: Repository<Pet_number>;
//
//   // save
//   async saveUser(input: { near_hex_account: string; near_secretKey: string; near_publicKey: string }) {
//     const user = new NearUser();
//     user.near_address = input.near_hex_account;
//     user.publicKey = input.near_publicKey;
//     user.secretKey = input.near_secretKey;
//     // save entity
//     const userResult = await this.usersModel.save(user);
//     // save success
//     console.log(userResult);
//   }
// }


