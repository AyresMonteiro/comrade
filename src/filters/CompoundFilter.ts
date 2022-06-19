import { ComradeAtomFilter } from "../contracts/ComradeAtomFilter";
import { ComradeFilter } from "../contracts/ComradeFilter";

export class CompoundFilter implements ComradeFilter {
  constructor(private readonly baseFilters: ComradeAtomFilter[]) {}

  async filter(data: Record<string, any>) {
    const independentFilteredData = await Promise.all(
      this.baseFilters.map((atomFilter) => atomFilter.filter(data))
    );

    return independentFilteredData.reduce(
      (prev, current) => ({ ...prev, ...current }),
      {}
    );
  }
}
