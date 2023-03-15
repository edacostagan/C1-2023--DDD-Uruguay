import { RoleDomainEntityBase } from '../../entities/employee/role.domain-entity/role.domain-entity';
import { IRoleDomainEntity } from '../../entities/interfaces';


export interface IRoleDomainService{

    CreateRole(roleData: RoleDomainEntityBase) : Promise < IRoleDomainEntity | null >;

    ChangeRoleDescription(data: RoleDomainEntityBase) : Promise < boolean >;

}