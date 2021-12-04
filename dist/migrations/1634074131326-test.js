"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class test1634074131326 {
    constructor() {
        this.name = 'test1634074131326';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "system_user" ADD CONSTRAINT "FK_1c066d5cab474ccf2f9de3932f6" FOREIGN KEY ("profileId") REFERENCES "room_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_likes" ADD CONSTRAINT "FK_b0d24961034c2a3a535dbc94fed" FOREIGN KEY ("postId") REFERENCES "room_post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_likes" ADD CONSTRAINT "FK_73e682f9cbc0fe3ea47d6c6fb4f" FOREIGN KEY ("userId") REFERENCES "system_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "room_post_likes" DROP CONSTRAINT "FK_73e682f9cbc0fe3ea47d6c6fb4f"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_likes" DROP CONSTRAINT "FK_b0d24961034c2a3a535dbc94fed"`, undefined);
        await queryRunner.query(`ALTER TABLE "system_user" DROP CONSTRAINT "FK_1c066d5cab474ccf2f9de3932f6"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post" DROP CONSTRAINT "FK_5cf058bc74bbac1ed3814f37d74"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_tags" DROP CONSTRAINT "FK_9ed4940e6616f46cd46b9d6dcdf"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_tags" DROP CONSTRAINT "FK_43afdaecd6cfcde5425f0fd8b76"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_views" DROP CONSTRAINT "FK_86a60107bf37cd0566f78b307e6"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_post_views" DROP CONSTRAINT "FK_34759c48645b623207df798985f"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_profile_following" DROP CONSTRAINT "FK_91bd5158c6498575a34471bb2ac"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_profile_following" DROP CONSTRAINT "FK_31563cebedebb329124bedfc9e3"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_profile_followers" DROP CONSTRAINT "FK_46509b598969b39fb5bafd0b1e0"`, undefined);
        await queryRunner.query(`ALTER TABLE "room_profile_followers" DROP CONSTRAINT "FK_791888335cb736dd22bf13f623a"`, undefined);
        await queryRunner.query(`DROP TABLE "room_post_likes"`, undefined);
        await queryRunner.query(`DROP TABLE "room_post"`, undefined);
        await queryRunner.query(`DROP TABLE "room_post_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "room_post_views"`, undefined);
        await queryRunner.query(`DROP TABLE "room_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "room_profile_following"`, undefined);
        await queryRunner.query(`DROP TABLE "room_profile_followers"`, undefined);
    }
}
exports.test1634074131326 = test1634074131326;
//# sourceMappingURL=1634074131326-test.js.map