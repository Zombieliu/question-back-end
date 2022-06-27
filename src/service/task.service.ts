import { Provide } from '@midwayjs/decorator';
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import { Task } from '../entity/task';

@Provide()
export class TaskService {

  @InjectEntityModel(Task)
  Task: Repository<Task>;


  async findAllTaskList(email) {
    const result = await this.Task.find(
      {
        where: {email}
      }
    )
    return result
  }


  async findTaskState(email,task_name) {
    const result = await this.Task.findOne(
      {
        where: {email,task_name}
      }
    )
    return result
  }

  async task_one(email,task_name) {
    const result = await this.Task.findOne(
      {
        where: {email,task_name}
      }
    )
    if(result){
      result.task_progress = result.task_progress + 1
      if(result.task_progress = result.task_require){
        result.task_complete = true
      }
    }
    await this.Task.save(result)

    return result
  }
}
