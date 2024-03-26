import { Test, TestingModule } from '@nestjs/testing';
import { PersonsController } from './persons.controller';

describe('PersonsController', () => {
  let controller: PersonsController;
  //let appController: AppController;

  beforeEach(async () => {
    const module:TestingModule = await Test.createTestingModule({
      controllers: [PersonsController],
      //providers: [AppService],
    }).compile();
    controller = module.get<PersonsController>(PersonsController);
});
    it('should return "Hello World!"', () => {
      expect(controller).toBeDefined();
    });
  });

