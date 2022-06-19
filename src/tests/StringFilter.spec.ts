import { StringFilter } from "../filters/StringFilter";

/**
 * @function makeSut
 *
 * Generates "System Under Test" Data.
 */
function makeSut(paramName: string) {
  return {
    sut: new StringFilter(paramName),
    simpleParamData: {
      [paramName]: "a string",
      ["not_" + paramName]: 123,
    },
    regexParamData: {
      [paramName + "_regex"]: "/abc/",
      ["not_" + paramName]: 123,
    },
    containsParamData: {
      [paramName + "_contains"]: "string",
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
    const { sut, containsParamData } = makeSut("name");

    const results = await sut.filter(containsParamData);

    expect(results).toEqual({ name_contains: containsParamData.name_contains });
  });
});
