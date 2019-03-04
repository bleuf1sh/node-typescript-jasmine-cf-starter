import "jasmine";
import { KeywordFinder } from "./keyword-finder";


describe("KeywordFinder", () => {
  
  it("should save and retrieve regex keyword list", () => {
    const regexKeywordList = []
    const keywordFinder = new KeywordFinder([]);
    expect(keywordFinder.getRegexKeywordList()).toEqual([]);
  });

});