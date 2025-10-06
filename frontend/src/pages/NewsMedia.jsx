import React from 'react';
import beamLogo from '../assets/beam_logo.png'; // Adjust path if needed
import newsImg1 from '../assets/news1.jpg'; // Replace with your actual image paths
import newsImg2 from '../assets/news2.jpg';
import './NewsMedia.css'; // Optional: create a CSS file for custom styles

function NewsMedia() {
  return (
    <div>
      {/* Header and Navigation (reuse your existing layout if possible) */}
      <header style={{ display: 'flex', alignItems: 'center', padding: '24px 32px' }}>
        <img src={beamLogo} alt="Beam Logo" style={{ height: 40, marginRight: 24 }} />
        <nav style={{ flex: 1 }}>
          {/* Add your navigation links here or reuse your NavBar component */}
        </nav>
      </header>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
        {/* Article 1 */}
        <section style={{ marginBottom: 48 }}>
          <h3 style={{ color: '#E6007A', fontWeight: 600 }}>MIDLE EAST ECONOMY</h3>
          <p style={{ fontWeight: 500, margin: '16px 0 0 0' }}>
            Beam Wallet has earned the recognition of being the fifth most promising startup in Europe. The digital wallet leverages Near-Field Communication (NFC), a short-range wireless connectivity technology, to facilitate payments. After you’ve linked your credit card to the app, you can access a range of services. These include mobile recharges and DTH subscriptions. In 2016, it became the first digital wallet in the UAE to enable users to pay for fuel.
          </p>
          <p style={{ fontWeight: 700, margin: '16px 0 0 0' }}>Read Full Article</p>
          <img src={newsImg1} alt="Economy news" style={{ width: 350, marginTop: 24, borderRadius: 8 }} />
        </section>

        {/* Article 2 */}
        <section style={{ marginBottom: 48 }}>
          <h3 style={{ color: '#E6007A', fontWeight: 600 }}>CNBC</h3>
          <p style={{ fontWeight: 500, margin: '16px 0 0 0' }}>
            Dubai-based mobile payments provider Beam goes global after major retail acquisition -
          </p>
          <p style={{ margin: '16px 0 0 0' }}>
            Beam says it has amassed around 1 million users since launching in the UAE in 2012. It now plans to expand further into the Middle East and into Europe, starting operations in Belgium, the Netherlands, Luxembourg, Portugal, Ukraine, Azerbaijan and Uzbekistan in the next six months.<br /><br />
            The firm already has a foothold in Australia and Sweden.<br /><br />
            “There has not been a strategic direction in terms of this market or that market — these are discussions that people have come to us and said, we’re interested in what you have done and why can’t we work together,”
          </p>
          <p style={{ fontWeight: 700, margin: '16px 0 0 0' }}>Read More</p>
          <img src={newsImg2} alt="CNBC news" style={{ width: 350, marginTop: 24, borderRadius: 8 }} />
        </section>
      </main>
    </div>
  );
}

export default NewsMedia;