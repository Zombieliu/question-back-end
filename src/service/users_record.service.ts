import {Provide} from "@midwayjs/decorator";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {Users_history_record} from "../entity/users_history_record";
import {Users_season} from "../entity/users_season";
import {Task} from "../entity/task";

@Provide()
export class UsersRecordService {

  @InjectEntityModel(Users_history_record)
  usersModel: Repository<Users_history_record>;

  @InjectEntityModel(Users_season)
  usersSeason: Repository<Users_season>;

  @InjectEntityModel(Task)
  Task: Repository<Task>;


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
    if( Number(result2.correct_number) <= 20){

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

  async querySeason_questions_number(season_phase,email,near_address) {
    const result = await this.usersSeason.findOne(
      {
        where:{season_phase,email,near_address}
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


  async buy_season(season_phase,email,near_address) {
    const user = new Users_season();
    user.season_phase = season_phase;
    user.email = email;
    user.near_address = near_address;
    user.season = "abel";
    user.season_url = "https://cdn.discordapp.com/attachments/876498266550853642/981828663366541352/xie.png";
    user.season_type = "普通";
    user.correct_number = 0;
    user.all_questions = 0;
    // save entity
    const userResult = await this.usersSeason.save(user);

    const task = new Task();
    task.email = email;
    task.season_type = "普通";
    task.task_name = "第一个任务";
    task.task_img = "https://cdn.discordapp.com/attachments/876498266550853642/978213965781958696/3.png";
    task.task_content = "完成一次答题";
    task.task_progress = "0";
    task.task_require = "1";
    task.task_award = 2;
    task.task_complete = false;
    await this.Task.save(task);

    return userResult;
  }





  async season_level(season_phase,email,near_address) {

    const result = await this.usersSeason.findOne(
      {
        where:{season_phase,email,near_address}
      }
    )
    result.season_type = "进阶",
    result.season_url = "https://cdn.discordapp.com/attachments/876498266550853642/984025747171713055/main_.png",
    await this.usersSeason.save(result);

    // save entity
    return result;


  }







}
