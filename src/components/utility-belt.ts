import { EOL } from 'os';
import * as moment from 'moment';
import prettyMs = require('pretty-ms');

export class UtilityBelt {
  private tag: string;

  constructor(tag: string, tagPadding: number = 13) {
    this.tag = tag.padEnd(tagPadding, ' ').substring(0, tagPadding);
  }

  logWarning(text: string) {
    if (process.env.HIDE_WARN_LOGS) {
      return;
    }
    this.log(`------------------------ WARNING ------------------------`);
    this.log(`WARN|${this.tag}| ${text}${EOL}------------------------`);
  }

  logError(text: string) {
    if (process.env.HIDE_ERRR_LOGS) {
      return;
    }
    this.log(`!!!!!!!!!!!!!!!!!!!!!!!!!! ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!`);
    this.log(`ERRR|${this.tag}| ${text}${EOL}!!!!!!!!!!!!!!!!!!!!!!!!!!`);
  }

  logInfo(text: string) {
    if (process.env.HIDE_INFO_LOGS) {
      return;
    }
    this.log(`INFO|${this.tag}| ${text}`);
  }

  logDebug(text: string) {
    if (process.env.HIDE_DBUG_LOGS) {
      return;
    }
    this.log(`DBUG|${this.tag}| ${text}`);
  }

  pretty(obj: any, spaces=2, injectNewLine=true):string {
    if (!injectNewLine) return JSON.stringify(obj, null, spaces);
    else return `${EOL}${JSON.stringify(obj, null, spaces)}`;
  }

  getHumanDate(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
  }

  getPrettyUptime(): string {
    return prettyMs(process.uptime() * 1000);
  }

  private log(text: string) {
    console.log(`${this.getHumanDate()}|${text}`)
  }
}
