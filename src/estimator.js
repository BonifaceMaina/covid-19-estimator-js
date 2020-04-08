const currentlyInfectedEstimate = (data) => {
  this.data = data;
  this.impact.currentlyInfected = data.reportedCases * 10;
  this.severeImpact.currentlyInfected = data.reportedCases * 50;
};
// const estimateInDays = (data) => {
//   const input = data;
//   return {
//     data: input,
//     impact: {
//       currentlyInfected: input.reportedCases * 10,
//       infectionsByRequestedTime: Math.floor(currentlyInfected * (2 ** (input.timeToElapse / 3)))
//     },
//     severeImpact: {
//       currentlyInfected: input.reportedCases * 50,
//       infectionsByRequestedTime: Math.floor(currentlyInfected * (2 ** (input.timeToElapse / 3)))
//     }
//   };
// };

const covid19ImpactEstimator = (data) => {
  const estimatedData = currentlyInfectedEstimate;
  return estimatedData({
    data: {},
    impact: {},
    severeImpact: {}
  });
};

export default covid19ImpactEstimator;
