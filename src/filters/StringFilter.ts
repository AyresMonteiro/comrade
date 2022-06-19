import { BaseAtomFilter } from "./BaseAtomFilter";

export class StringFilter extends BaseAtomFilter {
  constructor(private readonly paramName: string) {
    super();
  }

  getAvailableParams(): string[] {
    return [
      this.paramName,
      this.paramName + "_contains",
      this.paramName + "_regex",
    ];
  }
}
