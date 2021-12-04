import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class TaskService {
    private readonly logger = new Logger(TaskService.name);

    // constructor(public userService: UserService) {
    // }


    // @Cron(CronExpression.EVERY_15_MINUTES)
    // handleCron() {
    //     //console.log(randomHour({isPm: true}))
    //     this.logger.debug('Called when the MIN');
    // }
    //
    // // cada dia a las 12:30 de la noche
    //
    // // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) //  "0 0 * * *"
    // // @Cron(CronExpression.EVERY_30_MINUTES) // "0 */30 * * * *"
    // @Cron('0 30 0  * * * ')
    // async birthday() {
    //     //console.log(randomHour({isPm: true}))
    //     this.logger.debug(`triggerBirthDay ${new Date().toLocaleString()}`);
    //     this.userService.triggerBirthDay()
    // }

    //
    // @Interval(10000)
    // handleInterval() {
    //     console.log("Hola desde el servidor")
    //     this.logger.debug('Called every 10 seconds');
    // }
    //
    // @Timeout(5000)
    // handleTimeout() {
    //     this.logger.debug('Called once after 5 seconds');
    // }
}
