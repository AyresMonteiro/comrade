import { BaseAtomFilter } from "./BaseAtomFilter";

export class NumberFilter extends BaseAtomFilter {
  constructor(private readonly paramName: string) {
    super();
  }

  getAvailableParams(): string[] {
    return [
      this.paramName,
      this.paramName + "_gt",
      this.paramName + "_gte",
      this.paramName + "_lt",
      this.paramName + "_lte",
    ];
  }
}
