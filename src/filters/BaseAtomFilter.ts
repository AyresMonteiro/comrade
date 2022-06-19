import { ComradeAtomFilter } from "../contracts/ComradeAtomFilter";

export class BaseAtomFilter implements ComradeAtomFilter {
  getAvailableParams(): string[] {
    return [];
  }

  async filter(data: Record<string, any>) {
    const filtered: Record<string, any> = {};
    const availableParams = this.getAvailableParams();

    for (let availableParam of availableParams) {
      if (data[availableParam] !== undefined) {
        filtered[availableParam] = data[availableParam];
      }
    }

    return filtered;
  }
}
