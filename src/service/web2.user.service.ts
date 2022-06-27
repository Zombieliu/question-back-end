import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Web2User } from '../entity/web2user';
import { Repository } from 'typeorm';
import { Web2UserEmail } from "../entity/web2useremail";
import { Task } from '../entity/task';

@Provide()
export class Web2UsersService {
  @InjectEntityModel(Web2User)
  usersModel: Repository<Web2User>;

  @InjectEntityModel(Web2UserEmail)
  usersEmailModel: Repository<Web2UserEmail>;

  @InjectEntityModel(Task)
  Task: Repository<Task>;

  // save
  async saveUser(input: { near_hex_account: string; description: string; email: string; username: string }) {
    const user = new Web2User();
    user.username = input.username;
    user.description = input.description;
    user.email = input.email;
    user.near_address = input.near_hex_account;
    user.coin = 0 ;
    user.level = 0 ;
    user.level_progress = 0;
    // save entity
    const userResult = await this.usersModel.save(user);
    // save success
    console.log(userResult);
  }

  async findUserInfo(email:string){
    const result = await this.usersModel.findOne(
      {
        where:{email}
      }
    );
    return result;
  }

  async findUserNear(email:string){
    const result = await this.usersModel.find(
      {
        where:{email}
      }
    );
    return result;
  }

  async findUserCode(input:{ email:string; code:string; }){
    const email = input.email;
    const code  = input.code;
    const result = await this.usersEmailModel.findOneBy({
      email,
      code
    })
    if (result){
      await this.usersEmailModel.remove(result)
      return true
    }else{
      return false
    }
  }

  async addUserCode(input: { email:string; code:string;}){
    const user = new Web2UserEmail();
    user.email = input.email;
    user.code = input.code;
    const result = await this.usersEmailModel.save(user);
    console.log(result)
    setTimeout(async ()=>{    //10分钟后失效
      await this.usersEmailModel.remove(result)
    },1000*60*10)
  }

  async user_upgrade(email,data_number,task_name) {
    const result = await this.usersModel.findOne({
      where:{email}
    })
    if(result.level < 5){
      if(data_number + result.level_progress > 2){
        result.level = result.level +1
        result.level_progress = data_number + result.level_progress - 2
        result.coin = result.coin + result.level
        await this.usersModel.save(result);
      } else {
        result.level_progress = data_number + result.level_progress
        await this.usersModel.save(result);
      }

    }else if(result.level < 10){
      if(data_number + result.level_progress > 3){
        result.level = result.level +1
        result.level_progress = data_number + result.level_progress - 3
        result.coin = result.coin + result.level
        await this.usersModel.save(result);
      } else {
        result.level_progress = data_number + result.level_progress
        await this.usersModel.save(result);
      }

    }else if(result.level < 15){
      if(data_number + result.level_progress > 4){
        result.level = result.level +1
        result.level_progress = data_number + result.level_progress - 4
        result.coin = result.coin + result.level
        await this.usersModel.save(result);
      } else {
        result.level_progress = data_number + result.level_progress
        await this.usersModel.save(result);
      }

    }else if(result.level < 20){
      if(data_number + result.level_progress > 5){
        result.level = result.level +1
        result.level_progress = data_number + result.level_progress - 5
        result.coin = result.coin + result.level
        await this.usersModel.save(result);
      } else {
        result.level_progress = data_number + result.level_progress
        await this.usersModel.save(result);
      }
    }

    const taskResult = await this.Task.findOne({
      where:{email,task_name}

    });
    await this.Task.remove(taskResult)
    // save entity
    const userResult = await this.usersModel.save(result);
    // save success
    console.log(userResult);
  }

}
