
import { IEventPublisher } from "@sofka";
import { CustomerCreatedEventPublisherBase} from '.';
import { CustomerDomainEntityBase } from '../../../entities/invoice/customer.domain-entity';


class CustomerCreatedEventPublisher extends CustomerCreatedEventPublisherBase { }

describe('CustomerCreatedEventPublisherBase', () => {
  let eventPublisher: CustomerCreatedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new CustomerCreatedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.customer-created';
    const response = new CustomerDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
