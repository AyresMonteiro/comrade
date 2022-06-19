/**
 * @interface ComradeFilter
 *
 * A Filter.
 */
export interface ComradeFilter {
  filter(data: Record<string, any>): Promise<Record<string, any>>;
}
