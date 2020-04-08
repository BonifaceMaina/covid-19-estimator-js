const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  const impCI = data.reportedCases * 10;
  impact.currentlyInfected = impCI;
  const sevCI = data.reportedCases * 50;
  severeImpact.currentlyInfected = sevCI;
  //   const input = data;
  if (data.periodType === 'days') {
    let time = data.timeToElapse;
    impact.infectionsByRequestedTime = Math.floor(impCI * (2 ** (time / 3)));
    severeImpact.infectionsByRequestedTime = Math.floor(sevCI * (2 ** (time / 3)));
  } else if (data.periodType === 'weeks') {
    let time = data.timeToElapse * 7;
    impact.infectionsByRequestedTime = Math.floor(impCI * (2 ** (time / 3)));
    severeImpact.infectionsByRequestedTime = Math.floor(sevCI * (2 ** (time / 3)));
  } else if (data.periodType === 'months') {
    let time = data.timeToElapse * 30;
    impact.infectionsByRequestedTime = Math.floor(impCI * (2 ** (time / 3)));
    severeImpact.infectionsByRequestedTime = Math.floor(sevCI * (2 ** (time / 3)));
  }

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
