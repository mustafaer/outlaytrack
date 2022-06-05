export class RequestPayload {
  limit: number;
  valueOfSearch: string;
  orderByValue: string;
  offset: number;
  filter: string;

  constructor() {
    this.limit = 24;
    this.offset = 0;
    this.valueOfSearch = "";
    this.orderByValue = "-updatedAt";
    this.filter = "";
  }

  payloadURL(pageNo: number): string {
    this.offset = (pageNo - 1) * this.limit;
    return `?limit=${this.limit}&offset=${this.offset}&search=${this.valueOfSearch}&orderBy=${this.orderByValue}&${this.filter}`;
  }
}
