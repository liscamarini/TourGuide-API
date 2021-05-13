import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

import { v4 as uuid } from 'uuid';


@Entity('places')
class Place {
    @PrimaryColumn()
    id: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Place;

