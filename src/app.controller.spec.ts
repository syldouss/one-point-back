import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return an album list', () => {
      expect(appController.getLastListened()).resolves.not.toBeNull();
      expect(appController.getLastListened()).resolves.toHaveLength(100);
    });
    it('should return top 10 list', () => {
      expect(appController.getTop10Listened()).resolves.not.toBeNull();
      console.log('top10', appController.getTop10Listened());
      expect(appController.getTop10Listened()).resolves.toHaveLength(10);
    });
  });
});
