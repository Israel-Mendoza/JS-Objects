// Think of the object as a dictionary in Python
// The keys are called 'properties', though.

const fitBitData = {
    totalSteps: 8807,
    totalMiles: 10,
    avgCalorieBurn: 5755,
    workOutsThisWeek: "5 of 7",
    avgGoodSleep: "2:13"
};

// We access the keys using dot notation:
console.log(`Total steps: ${fitBitData.totalSteps}`);
console.log(`Total miles: ${fitBitData.totalMiles}`);
console.log(`Average calorie burn: ${fitBitData.avgCalorieBurn}`);
console.log(`Workouts this week: ${fitBitData.workOutsThisWeek}`);
console.log(`Average of good sleep time: ${fitBitData.avgGoodSleep}`);

