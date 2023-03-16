import { IEventPublisher } from "@sofka";
import { RoleDomainEntityBase } from '../../../../entities/employee/role.domain-entity';
import { RoleDescriptionChangedEventPublisherBase } from './role-description-changed.event-publisher';

class RoleDescriptionChangedEventPublisher extends RoleDescriptionChangedEventPublisherBase { }

describe('RoleDescriptionChangedEventPublisherBase', () => {
  let eventPublisher: RoleDescriptionChangedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new RoleDescriptionChangedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.role-description-changed';
    const response = true;
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
