import {Factory, Seeder} from 'typeorm-seeding';
import {Connection} from 'typeorm';
import {Role} from '../schema/role.schema';

export default class RolesInsertUpdateSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const list: Partial<Role>[] = [
            {
                'id': 1,
                'isActive': true,
                'name': 'admin',
            },
            {
                'id': 2,
                'isActive': true,
                'name': 'guest',
            },

        ];
        await connection.getRepository(Role).save(list,{});
    }
}
