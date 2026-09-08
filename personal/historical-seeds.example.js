// Example historical seeds — safe to commit. Copy to historical-seeds.js to add import backfills.
// These merge at load time only for missing keys (see applyHistoricalSeeds in index.html).
// Renpho chunks override prior import-sourced entries only — never manual in-app logs.
window.__PERSONAL__ = window.__PERSONAL__ || {};
window.__PERSONAL__.seeds = {
  inbodyBaselineDate: null,
  inbodyBaseline: null,
  bodyMetricsFillOnly: {},
  bodyMetricsRenphoOverride1: {},
  bodyMetricsRenphoOverride2: {},
  bodyMetricsRenphoOverride3: {},
  historicalNutrition: {},
  historicalWeeklyAvg: {},
  historicalMonthlyAvg: {},
};
