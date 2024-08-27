import React from 'react';
import checkCircle from '../../../images/enterprise/icon/check_circle.svg';

const SuitableFor = () => {
  return (
    <div>
      <div className="container-fluid px-0 py-5 enterprisefstly d-none d-lg-block">
        <div className="custom-container">
          <p className="text-center">
            Blink’s Enterprise Practice combines the best of both worlds, constant innovation, and the most robust online ordering system for F&B and grocery sectors, with the flexibility required for large-scale organizations
          </p>
        </div>
      </div>

      <div className="container-fluid px-0 suitablefor mt-5 mt-lg-0">
        <div className="custom_container2">
          <div className="head" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p className="text-center">Who is it suitable for?</p>
          </div>
          <table className="table table-striped tableCustom">
            <tbody>
              <tr>
                <td>
                  <p className="pt-2">You represent a large-sized enterprise</p>
                </td>
                <td>
                  <img src={checkCircle} alt="check circle" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>You love Blink’s unmatched capabilities but your organizational policies don’t allow you to be on a multi-tenant cloud.</p>
                </td>
                <td>
                  <img src={checkCircle} alt="check circle" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>You want to benefit from Blink’s growth and engagement-driven quick-commerce platform but have custom requirements and integrations that are not currently available on Blink’s platform.</p>
                </td>
                <td>
                  <img src={checkCircle} alt="check circle" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>You need project management support and handholding in implementation, rollout, and subsequent platform management (beyond technical support).</p>
                </td>
                <td>
                  <img src={checkCircle} alt="check circle" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>You have a set of comprehensive infosec requirements (particular certifications) that need to be assessed by third parties.</p>
                </td>
                <td>
                  <img src={checkCircle} alt="check circle" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuitableFor;
