import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlaces1620917222883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'places',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'uf',
                        type: 'varchar(2)',

                    },
                    {
                        name: 'description',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'image',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'update_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('places');
    }

}
