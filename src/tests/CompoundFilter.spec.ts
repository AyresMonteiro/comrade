import { StringFilter } from "../filters/StringFilter";
import { CompoundFilter } from "../filters/CompoundFilter";
import { NumberFilter } from "../filters/NumberFilter";

/**
 * @function makeSut
 *
 * Generates "System Under Test" Data.
 */
function makeSut(paramName: string) {
  return {
    sut: new CompoundFilter([
      new StringFilter(paramName),
      new NumberFilter(paramName),
    ]),
    simpleParamData: {
      [paramName]: "a string",
      ["not_" + paramName]: 123,
    },
    regexParamData: {
      [paramName + "_regex"]: "/abc/",
      ["not_" + paramName]: 123,
    },
    gteParamData: {
      [paramName + "_gte"]: 15,
      ["not_" + paramName]: 123,
    },
  };
}

describe("StringFilter", function () {
  it("should filter base data", async () => {
    const { sut, simpleParamData } = makeSut("name");

    const results = await sut.filter(simpleParamData);

    expect(results).toEqual({ name: simpleParamData.name });
  });

  it("should filter regex data", async () => {
    const { sut, regexParamData } = makeSut("name");

    const results = await sut.filter(regexParamData);

    expect(results).toEqual({ name_regex: regexParamData.name_regex });
  });

  it("should filter contains data", async () => {
    const { sut, gteParamData } = makeSut("price");

    const results = await sut.filter(gteParamData);

    expect(results).toEqual({ price_gte: gteParamData.price_gte });
  });
});
