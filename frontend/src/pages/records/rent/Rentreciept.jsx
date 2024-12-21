import React from "react";

function Rentreciept() {
  return (
    <div className="receipt-wrapper">
      <div className="receipt-container">
        <div className="receipt-number">Receipt #: 2024001</div>
        
        <div className="header">
          <img src="/api/placeholder/100/100" alt="Church Logo" className="church-logo" />
          <div className="receipt-title">GRACE COMMUNITY CHURCH</div>
          <div className="church-details">
            123 Faith Street, Blessed City<br />
            Tel: (012) 345-6789<br />
            Email: finance@gracechurch.org
          </div>
        </div>

        <h2 className="receipt-heading">RENT PAYMENT RECEIPT</h2>

        <div className="main-content">
          <table className="payment-details">
            <tbody>
              <tr>
                <td>Date:</td>
                <td>December 21, 2024</td>
              </tr>
              <tr>
                <td>Received From:</td>
                <td>Mr. John Smith</td>
              </tr>
              <tr>
                <td>Member ID:</td>
                <td>GCC2024-123</td>
              </tr>
              <tr>
                <td>Payment For:</td>
                <td>Rent Contribution - November 2024</td>
              </tr>
              <tr>
                <td>Payment Method:</td>
                <td>Bank Transfer</td>
              </tr>
            </tbody>
          </table>

          <div className="amount-section">
            <table className="amount-table">
              <tbody>
                <tr>
                  <td className="amount-label">Amount Paid:</td>
                  <td className="amount-value">R 500.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="amount-words">
            Amount in words: <em>Five Hundred Rands Only</em>
          </div>
        </div>

        <div className="footer">
          <div className="signature-block">
            <div className="signature-line">
              Authorized Signature
            </div>
          </div>
          <div className="signature-block right">
            <div className="signature-line">
              Recipient Signature
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="thank-you">
          <p>Thank you for your contribution. May God bless you abundantly!</p>
          <p className="official-note">This is an official receipt of Grace Community Church</p>
        </div>
      </div>

      <div className="print-button">
        <button onClick={() => window.print()}>Print Receipt</button>
      </div>
    </div>
  );
}

export default Rentreciept;