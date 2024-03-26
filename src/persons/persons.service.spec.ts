import { Test, TestingModule } from '@nestjs/testing';
import { PersonsService } from './persons.service';

describe('PersonsService', () => {
  let service: PersonsService;
  //let appController: AppController;

  beforeEach(async () => {
    const module:TestingModule = await Test.createTestingModule({
      controllers: [PersonsService],
      //providers: [AppService],
    }).compile();
    service=module.get<PersonsService>(PersonsService);
  });

    it('should return "Hello World!"', () => {
      expect(service).toBe('Hello World!');
    });
  });

