import { BaseAtomFilter } from "./BaseAtomFilter";

export class DateFilter extends BaseAtomFilter {
  constructor(private readonly paramName: string) {
    super();
  }

  getAvailableParams(): string[] {
    return [
      this.paramName,
      this.paramName + "_after",
      this.paramName + "_before",
    ];
  }
}
