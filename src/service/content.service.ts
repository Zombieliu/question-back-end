import {Provide} from "@midwayjs/decorator";
import {InjectEntityModel} from "@midwayjs/orm";
import {Repository} from "typeorm";
import {near_content} from "../entity/near_content";
import {near_content_question} from "../entity/near_content_question";
import {content_correct_question} from "../entity/correct_answer";

@Provide()
export class ContentService {

  @InjectEntityModel(near_content)
  usersModel: Repository<near_content>;

  @InjectEntityModel(near_content_question)
  contentQuestion: Repository<near_content_question>;

  @InjectEntityModel(content_correct_question)
  contentCorrectQuestion: Repository<content_correct_question>;


  async findAllContentList(season) {
    const result = await this.usersModel.find({
        where:{season}
      });
    return result;
  }

  async findOneContent(content,season) {
    const result = await this.usersModel.findOne({
      where:{content,season}
    });
    return result;
  }

  async findContentQuestion(content_index,content,season) {

    const result = await this.contentQuestion.find({
      where:{content_index,content,season}
    });
    return result;
  }

  async findCorrectQuestion(content,content_index,question,selected,season) {

    const result = await this.contentCorrectQuestion.findOne({
      where:{content,content_index,question,season}
    });
    if(result.correct_answer == selected){
      return true
    }else {
      return false;
    }
  }

}
