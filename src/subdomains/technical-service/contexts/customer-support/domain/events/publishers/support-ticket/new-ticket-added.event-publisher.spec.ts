import { IEventPublisher } from "@sofka";
import { NewTicketAddedEventPublisherBase } from ".";
import { SupportTicketDomainEntityBase } from '../../../entities/support-ticket';

class NewTicketAddedEventPublisher extends NewTicketAddedEventPublisherBase { }

describe('NewTicketAddedEventPublisherBase', () => {
  let eventPublisher: NewTicketAddedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new NewTicketAddedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.new-ticket-added';
    const response = new SupportTicketDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
