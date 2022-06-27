import {Body, Controller, Get, Inject, Post, Query} from '@midwayjs/decorator';
import {TaskService} from "../service/task.service";
import {task_list} from "../interface";

@Controller('/api/near')
export class ApiTask {


  @Inject()
  apiTask: TaskService;


  @Get('/query/taskList')
  async taskList(@Query() input: task_list) {
    const email = input.email
    const result = await this.apiTask.findAllTaskList(email)
    return result;
  }

  @Get('/query/taskState')
  async taskState(@Query() input: task_list) {
    const email = input.email
    const task_name = input.task_name
    const result = await this.apiTask.findTaskState(email,task_name)
    return result;
  }

  @Post('/post/task_one')
  async task_one(@Body() input: task_list) {
    const email = input.email;
    const task_name = "第一个任务"

    const result =  await this.apiTask.task_one(email,task_name);
    return result;
  }

}
