import "jasmine";
import { KeywordFinder } from "./keyword-finder";


describe("KeywordFinder", () => {
  
  it("should save and retrieve regex keyword list", () => {
    const keywordFinderEmpty = new KeywordFinder([]);
    expect(keywordFinderEmpty.getRegexKeywordList()).toEqual([]);

    const randomString: string = ''+Date.now();
    const keywordFinderRandom = new KeywordFinder([randomString]);
    expect(keywordFinderRandom.getRegexKeywordList()).toEqual([randomString]);
  });

  it("should detect keywords fixed to word boundries", () => {    
    const keywordFinder = new KeywordFinder(['gal']);
    expect(keywordFinder.isKeywordPresent(null)).toBeFalsy();
    expect(keywordFinder.isKeywordPresent('')).toBeFalsy();
    expect(keywordFinder.isKeywordPresent('gallon')).toBeFalsy();

    expect(keywordFinder.isKeywordPresent('gal')).toBeTruthy();
    expect(keywordFinder.isKeywordPresent(' gal')).toBeTruthy();
    expect(keywordFinder.isKeywordPresent('gal ')).toBeTruthy();
    expect(keywordFinder.isKeywordPresent(' gal ')).toBeTruthy();
    expect(keywordFinder.isKeywordPresent(' why gal?')).toBeTruthy();
  });

});