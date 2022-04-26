import { Chart } from "react-google-charts"


const PortfolioCharts = ({portfolio, cash}) => {

    // Create investment array showing coin name and coin price

    let portfolioArray=[];
    if (portfolio) { // check to see if investments exist

        portfolio.map( crypto => {
            const coinInfo={
                name: crypto.coin.name, // name of crypto
                investment: crypto.investment // investment value of crypto
            };
            portfolioArray.push(coinInfo);
        });
    } // end if

    // Function to combine current value of crypto purchases
for (let i = 0; i < portfolioArray.length; ++i) { // Run through each item in investmentArray
   
    for (let unique = 0; unique < portfolioArray.length; unique++) { // Second for loop to find unique keys
        
        // if cryptocurrency is found when looping round the second time
        if (i !== unique && portfolioArray[i].name === portfolioArray[unique].name) { 
            portfolioArray[i].investment+=portfolioArray[unique].investment; // Add value to first listing of cryptocurrency
            portfolioArray.splice(unique, 1); // Remove duplicate entry from investmentArray
        } // end if
    } // end of second for loop
} // end of first for loop

    const pieChart = [["Coin", "Cash Invested"], ["Cash USD", cash]];

    portfolioArray.map(investment => {
        const currentInvestment = [investment.name, investment.investment]
        pieChart.push(currentInvestment)
    })
    
    return (
        <>
            <Chart
                chartType="PieChart"
                data={pieChart}
                // options = "my investment"
                width="100%"
                height="400px"
                legendToggle
/>
        </>
    )
};
export default PortfolioCharts;