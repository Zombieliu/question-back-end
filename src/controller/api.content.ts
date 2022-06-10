import {Body, Controller, Get, Inject, Post, Query,} from "@midwayjs/decorator";
import {ContentService} from "../service/content.service";
import {Buy_season, content, users_history_record} from "../interface";
import {UsersRecordService} from "../service/users_record.service";
@Controller('/api/near')
export class ApiContent {

  @Inject()
  apiContent: ContentService;

  @Inject()
  apiUserRecord: UsersRecordService;



  @Get('/query/contentList')
  async contentList(@Query() input: content) {
    const season = input.season
    const result = await this.apiContent.findAllContentList(season)
    return result;
  }

  @Get('/query/content')
  async content(@Query() input: content) {
    const season = input.season
    const content = input.content;
    const result = await this.apiContent.findOneContent(content,season)
    return result;
  }


  @Get('/query/content_Question')
  async content_Question(@Query() input: content) {
    const season = input.season
    const content = input.content;
    const content_index = input.content_index;
    const result = await this.apiContent.findContentQuestion(content_index,content,season)
    return result;
  }

  @Get('/query/content_CorrectQuestion')
  async content_CorrectQuestion(@Query() input: content) {
    const season = input.season
    const content = input.content;
    const content_index = input.content_index;
    const question = input.question
    const selected =input.selected
    const result = await this.apiContent.findCorrectQuestion(content,content_index,question,selected,season)
    return result;
  }


  @Post('/add_users_record')
  async add_users_record(@Body() input: users_history_record ) {
    const season = input.season
    const email = input.email;
    const near_address = input.near_address;
    const content = input.content;
    const content_index = input.content_index
    const correct_number = 0
    const all_questions = 0
    const result = await this.apiUserRecord.add_users_record(email,near_address,content,correct_number,content_index,all_questions,season)
    return result;
  }

  @Post('/renew_all_questions')
  async renew_all_questions(@Body() input: users_history_record ) {
    const season = input.season
    const email = input.email;
    const content = input.content;
    const content_index =input.content_index
    const result = await this.apiUserRecord.renew_all_questions(email,content,content_index,season)
    return result;
  }

  @Post('/renew_correct_number')
  async renew_correct_number(@Body() input: users_history_record ) {
    const season = input.season
    const email = input.email;
    const content = input.content;
    const content_index =input.content_index
    const result = await this.apiUserRecord.renew_correct_number(season,email,content,content_index)
    return result;
  }


  @Get('/query/questions_number')
  async queryCorrect_number(@Query() input: users_history_record) {
    const season = input.season
    const content =input.content
    const email = input.email;
    const content_index = input.content_index;
    const result = await this.apiUserRecord.queryCorrect_number(season,content,email,content_index)
    return result;
  }


  @Get('/query/season_questions_number')
  async querySeason_questions_number(@Query() input: users_history_record) {
    const season = input.season
    const email = input.email;
    const result = await this.apiUserRecord.querySeason_questions_number(season,email)
    return result;
  }

  @Get('/query/all_questions_number')
  async queryAll_questions_number(@Query() input: users_history_record) {
    const email = input.email;
    const result = await this.apiUserRecord.queryAll_questions_number(email)
    return result;
  }

  @Post('/buy_season')
  async buy_season(@Body() input: Buy_season ) {
    const season = input.season
    const season_url = input.season_url;
    const email = input.email;
    const near_address =input.near_address
    const result = await this.apiUserRecord.buy_season(season,season_url,email,near_address)
    return result;
  }

}
