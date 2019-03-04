export class KeywordFinder {
  private regexKeywordList: string[];
  private keywordFindingRegex: RegExp;

  constructor(regexKeywordList: string[]) {
    this.regexKeywordList = regexKeywordList;
    this.keywordFindingRegex = this.generateKeywordFindingRegex(regexKeywordList);
  }

  getRegexKeywordList(): string[] {
    return this.regexKeywordList;
  }

  isKeywordPresent(text: string) {
    if (!text) return false;

    return this.keywordFindingRegex.test(text);    
  }

  private generateKeywordFindingRegex(regexKeywordList: string[]): RegExp {
    let regexString = '';
    regexKeywordList.forEach((keyword) => {
        regexString += `\\b${keyword}\\b|`;
    });
    
    regexString = regexString.slice(0, regexString.lastIndexOf(`|`));
    
    let compiledCaseInsensitiveRegex: RegExp = new RegExp(regexString, 'i');
    console.log(`KeywordUtils | Generated keyword finding regex: ${compiledCaseInsensitiveRegex}`);
    return compiledCaseInsensitiveRegex;
  };
}