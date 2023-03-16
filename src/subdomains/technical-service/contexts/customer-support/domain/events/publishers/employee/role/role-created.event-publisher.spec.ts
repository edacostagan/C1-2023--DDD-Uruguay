import { IEventPublisher } from "@sofka";
import { RoleCreatedEventPublisherBase } from '.';
import { RoleDomainEntityBase } from '../../../../entities/employee/role.domain-entity/role.domain-entity';

class RoleCreatedEventPublisher extends RoleCreatedEventPublisherBase { }

describe('RoleCreatedEventPublisherBase', () => {
  let eventPublisher: RoleCreatedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new RoleCreatedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.role-created';
    const response = new RoleDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
