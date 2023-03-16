import { IEventPublisher } from "@sofka";
import { WarrantyAddedEventPublisherBase } from ".";
import { WarrantyDomainEntityBase } from '../../../entities/invoice';



class WarrantyAddedEventPublisher extends WarrantyAddedEventPublisherBase { }

describe('InvoiceCreatedEventPublisherBase', () => {
  let eventPublisher: WarrantyAddedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new WarrantyAddedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.warranty-added';
    const response = new WarrantyDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
