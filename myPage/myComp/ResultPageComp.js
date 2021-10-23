import React from 'react'
import GooglePieChart from './GooglePieChart'
import GoogleBarChart from './GoogleBarChart'
function ResultPageComp() {
    return (
        <div>
            <section className="graph">
            <div className="graphGrid">
                <GooglePieChart classNameName="piechart_3d"/>
                <GooglePieChart classNameName="piechart_3d"/>
            </div>
        </section>
        <section className="barGraph">
            <div className="barGraph">
                 <GoogleBarChart/>   
            </div>
           
        </section>
        <section className="tableForPieChart">
            <div className="containerTable">
                <div className="tableP1">
            <table className="table11">
                <thead>
                  <tr>
                    <th>Activities</th>
                    <th>Investment</th>
                    <th>Expected Saving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Food</td>
                    <td>Rs 5000</td>
                    <td>Rs 600</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
              <table className="table12">
                <thead>
                  <tr>
                    <th>Activities Count</th>
                    <th>Investment Total</th>
                    <th>Expected Savings Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5</td>
                    <td>Rs 5000</td>
                    <td>Rs 600</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tableP2">
              <table className="table2">
                <thead>
                  <tr>
                    <th>Activities</th>
                    <th>Investment</th>
                    <th>Expected Saving</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Food</td>
                    <td>Rs 5000</td>
                    <td>Rs 600</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
        </section>
        <section className="reslutTable">
            <table className="tableResult">
                <thead>
                  <tr>
                    <th>Activities</th>
                    <th>Loss/ Profit(₹)</th>
                    <th>Loss/ Profit(%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="loss">
                    <td>Food</td>
                    <td>Rs 2000</td>
                    <td>-20%</td>
                  </tr>
                  <tr className="profit">
                    <td>Mary</td>
                    <td>Rs 2000</td>
                    <td>+20%</td>
                  </tr>
                  <tr className="loss">
                    <td>July</td>
                    <td>Rs 1000</td>
                    <td>-5%</td>
                  </tr>
                </tbody>
              </table>
        </section>
        <section className="highlights">
            <h1 className="highlightsHead">Highlights</h1>
            <div>
                <h5>{'->'}Total Loss of Rs 3000 (60%)</h5>
                <h5>{'->'}Total Profit of Rs 2000 (40%)</h5>
                <h5>{'->'}Average Expenditure is Rs 3000</h5>
                <h5>{'->'}Average Income is Rs 6000</h5>
            </div>
            <div className="finalHighlights">
                <h1 className="profit hide" id="profitH1">Congratulations! You are in Profit</h1>
                <h1 className="loss" id="lossH1">BAD LUCK! You are in Loss</h1>
            </div>
        </section>
        </div>
    )
}

export default ResultPageComp
