import { IEventPublisher } from "@sofka";
import { InvoiceCreatedEventPublisherBase } from ".";
import { InvoiceDomainEntityBase } from '../../../entities/invoice/invoice.domain-entity';


class InvoiceCreatedEventPublisher extends InvoiceCreatedEventPublisherBase { }

describe('InvoiceCreatedEventPublisherBase', () => {
  let eventPublisher: InvoiceCreatedEventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new InvoiceCreatedEventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'customer-support.invoice-created';
    const response = new InvoiceDomainEntityBase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});
