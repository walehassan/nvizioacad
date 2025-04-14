import'./Home.css';
import Scndimg from '../../assets/first.jpg'
import Scndinner from '../../assets/second.jpg'
import thrdimg from '../../assets/wix1.avif'
import fourthimg from '../../assets/wix2.avif'
import fifthimg from '../../assets/wix3.avif'
import sixthimg from '../../assets/wix4.avif'



const index = () => {
  return (
    <div>
      <div className="herodescript">
        <h3>find the perfect lesson to learn</h3>
        <h3>search for a course</h3>
      </div>
      <div>
        <h3 className='herodes2'>FREE WEB HOSTING</h3>
        <h1 className='heroh1'>Web hosting you can count on</h1>
        <p className='herop'>Get secure, scalable web hosting built right in when you create your website with Wix<br/>— no setup needed. Plus enjoy a free domain name for one year with select website<br/> plans.</p>
        <button className='getstarted'>Get Started</button>
      </div>

      {/* second section */}
      <div className='scndsection'>
        <img src={Scndimg} alt="" className='scndimg' />
        <img src={Scndinner} alt="" className='scndinner' />
      </div>
      <h3><span>Our customers say</span> Excellent  <span>4.5 out of 5 based on 23,657 reviews</span> Trustpilot</h3>
      <h2 className='reshosting'>Resilient hosting. Unmatched performance.</h2>

      {/* third section */}
      <div>
        <div className='thirdsect'>
          <h3 className='thirdsectxt'>Ready to handle anything</h3>
        </div>
        <div className='thirdsect'>
          <h3 className='thirdsectxt'>Security that never sleeps</h3>
        </div>
        <div className='thirdsect'>
          <h3 className='thirdsectxt'>Industry leading performance</h3>
        </div>
      </div>

      {/* fourth section */}
      <div className='fourthsection'>
        <div className='fourthsec'>
          <div>
            <h2 className='getvis'>Get real-time visibility and<br/> actionable insights</h2>

            <div className='fourthsect1'>
              <h4 className='sitespeed'>Site speed</h4>
              <p>Monitor your site speed and get expert tips on<br/> how to improve.</p>
            </div>

            <div className='fourthsect1'>
              <h4 className='sitespeed'>Uptime and Security</h4>
              <p>Track your global availability and see how Wix<br/> keeps your site running.</p>
              <button className='getstarted2'>Get Started</button>
            </div>
          </div>

          <img src={thrdimg} alt="" className='thrdimg' />
        </div>
      </div>
      <h2 className='reshosting'>Everything you need to<br/> succeed online.</h2>

      {/* fifth section */}
      <div className='fifthsect'>
        <img src={fourthimg} alt="" className='fourthimg' />
        <div className='fifthsec1'>
          <h4 className='create'>Create your website</h4>
          <p className='fifthsecp'>Start with a free website template or use AI to build a<br/> business-ready website in no time and customize every<br/> aspect to make it your own.</p>
          <button className='getstarted3'>Get started</button>
        </div>
      </div>

      {/* sixth section */}
      <div className='sixthsect'>
        <div>
          <img src={fifthimg} alt="" className='fifthimg'/>
          <div className='sixthsect1'>
            <h3 className='create'>Register a domain</h3>
            <p>Strengthen your brand and boost online credibility with a unique<br/> domain name, plus get one year free with select site plans.</p>
            <button className='getstarted3'>Get a domain</button>
          </div>
        </div>
        <div>
          <img src={sixthimg} alt="" className='sixthimg' />
          <div className='sixthsect1'>
            <h3 className='create'>Get a business Email</h3>
            <p>Strengthen your brand and boost online credibility with a unique<br/> domain name, plus get one year free with select site plans.</p>
            <button className='getstarted4'>Get a custom email</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index