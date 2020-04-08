const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};

  const impCI = data.reportedCases * 10;
  impact.currentlyInfected = impCI;
  const sevCI = data.reportedCases * 50;
  severeImpact.currentlyInfected = sevCI;
  let time = data.timeToElapse;

  if (data.periodType === 'weeks') {
    time = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    time = data.timeToElapse * 30;
  }
  impact.infectionsByRequestedTime = Math.floor(impCI * (2 ** (time / 3)));
  severeImpact.infectionsByRequestedTime = Math.floor(sevCI * (2 ** (time / 3)));
  const sevCBRT = 0.15 * severeImpact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = sevCBRT;
  const bedsAvailable = 0.35 * data.totalHospitalBeds;
  severeImpact.hospitalBedsByRequestedTime = bedsAvailable - sevCBRT;

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
