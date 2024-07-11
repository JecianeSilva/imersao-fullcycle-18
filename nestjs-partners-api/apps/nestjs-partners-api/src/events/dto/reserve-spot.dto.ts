import { TicketKind } from '@prisma/client';

export class ReserveSpotDTO {
  spots: string[];
  ticket_kind: TicketKind;
  email: string;
}
