import { ComradeFilter } from "./ComradeFilter";

/**
 * @interface ComradeAtomFilter
 *
 * An Atom Filter is a filter responsible for a non-compound property.
 */
export interface ComradeAtomFilter extends ComradeFilter {
  getAvailableParams(): string[];
}
