import {Provide} from "@midwayjs/decorator";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {Users_history_record} from "../entity/users_history_record";
import {Users_season} from "../entity/users_season";

@Provide()
export class UsersRecordService {

  @InjectEntityModel(Users_history_record)
  usersModel: Repository<Users_history_record>;

  @InjectEntityModel(Users_season)
  usersSeason: Repository<Users_season>;


  async add_users_record(email,near_address,content,correct_number,content_index,all_questions,season) {
    const user = new Users_history_record();
    user.email = email;
    user.near_address = near_address;
    user.season = season;
    user.content_index = content_index;
    user.content = content;
    user.correct_number = correct_number;
    user.all_questions = all_questions;
    // save entity
    const userResult = await this.usersModel.save(user);
    return userResult;
  }

  async renew_correct_number(season,email,content,content_index) {
    const result = await this.usersModel.findOne(
      {
        where:{season,email,content,content_index}
      }
    )

    if( Number(result.correct_number) <= 5){

      result.correct_number = (Number(result.correct_number)+ 1)

       await this.usersModel.save(result);
    }

    const result2 = await this.usersSeason.findOne(
      {
        where:{season,email}
      }
    )
    if( Number(result2.correct_number) <= 5){

      result2.correct_number = (Number(result2.correct_number)+ 1)

      await this.usersSeason.save(result2);
    }
    // save entity
    return result;
  }

  async renew_all_questions(email,content,content_index,season) {
    const result = await this.usersModel.findOne(
      {
        where:{season,email,content,content_index}
      }
    )
      result.all_questions = (result.all_questions)+ 1
      await this.usersModel.save(result);

    const result2 = await this.usersSeason.findOne(
      {
        where:{season,email}
      }
    )
    result2.all_questions = (result2.all_questions)+ 1
    await this.usersSeason.save(result2);

    // save entity
    return result;
  }


  async queryCorrect_number(season,content,email,content_index) {
    const result = await this.usersModel.findOne(
      {
        where:{season,content,email,content_index}
      }
    )
    // save entity
    return result;
  }

  async querySeason_questions_number(season,email) {
    const result = await this.usersSeason.findOne(
      {
        where:{season,email}
      }
    )
    return result;
  }


  async queryAll_questions_number(email) {
    const result = await this.usersSeason.find(
      {
        where:{email}
      }
    )
    return result;
  }


  async buy_season(season,season_url,email,near_address) {
    const user = new Users_season();
    user.email = email;
    user.near_address = near_address;
    user.season = season;
    user.season_url = season_url;
    user.correct_number = 0;
    user.all_questions = 0;
    // save entity
    const userResult = await this.usersSeason.save(user);
    return userResult;
  }





}
