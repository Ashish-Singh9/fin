import React from 'react'
import GooglePieChart from './GooglePieChart'
function ShowCaseComp() {
    return (
        <div>
            <main className="mb-5">
          <div id="chart_div">
            <div className="Options container text-right mb-3 mt-3">
              <a href="" className="text-decoration-none">Delete Agenda</a>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <GooglePieChart className="piechart_3d"/>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <GooglePieChart className="piechart_3d"/>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h2>Agenda (Planned)</h2>
            <p>This table shows you , your desired agenda statics which you planned .</p>
            <div className="text-right mb-3" id="Edit">
              <a href="" className="fa fa-edit"></a>
            </div>            
            <table className="table table-hover text-center">
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
          <div className="container">
            <table className="table text-center">
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
          <div className="Options container text-right">
            <a href="" className="text-decoration-none">AI Opinion</a>
          </div>
          <div className="container mt-5">
            <h2>Agenda (Resultant)</h2>
            <p>This table shows you , your final agenda statics which you add manually .</p>
            <div className="text-right mb-3" id="Edit">
              <a href="" className="fa fa-edit"></a>
            </div>            
            <table className="table table-hover text-center">
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
          <div className="Options container text-right">
            <a href="" className="text-decoration-none">Evaluation</a>
          </div>
        </main>
        </div>
    )
}

export default ShowCaseComp
