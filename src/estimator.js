const covid19ImpactEstimator = (data) => {
  const input = data;
  if (input.periodType === 'weeks') {
    input.timeToElapse *= 7;
  }
  if (input.periodType === 'months') {
    input.timeToElapse *= 30;
  }
  return {
    data: input,
    impact: {
      currentlyInfected: input.reportedCases * 10,
      infectionsByRequestedTime: Math.floor(currentlyInfected * (2 ** (input.timeToElapse / 3)))
    },
    severeImpact: {
      currentlyInfected: input.reportedCases * 50,
      infectionsByRequestedTime: Math.floor(currentlyInfected * (2 ** (input.timeToElapse / 3)))
    }
  };
};

export default covid19ImpactEstimator;
