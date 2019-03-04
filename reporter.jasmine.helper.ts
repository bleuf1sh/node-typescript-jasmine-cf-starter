import {SpecReporter} from "jasmine-spec-reporter";
import { Configuration } from "jasmine-spec-reporter/built/configuration";

console.log('Activating custom jasmine-spec-reporter');

// remove default reporter logs
jasmine.getEnv().clearReporters();
const config = new Configuration();
config.suite = { displayNumber: false }
config.spec = {
  displayErrorMessages: true,
  displayStacktrace: true,
  displaySuccessful: true,
  displayFailed: true,
  displayPending: true,
  displayDuration: true,
}
config.summary = {
  displayErrorMessages: true,
  displayStacktrace: true,
  displaySuccessful: false,
  displayFailed: true,
  displayPending: true,
  displayDuration: true,
}
config.colors = {
  enabled: true,
  successful: "green",
  failed: "red",
  pending: "yellow",
}
config.prefixes = {
  successful: "✓ ",
  failed: "✗ ",
  pending: ". ",
}

jasmine.getEnv().addReporter(new SpecReporter(config));