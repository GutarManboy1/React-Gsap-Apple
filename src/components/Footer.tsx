import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className='info'>
        <p>Find an Apple Store near you, or call 1-800-MY-APPLE.</p>
        <img src="/logo.svg" alt="apple logo" />

        <hr />

        <div className='links'>
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <ul>
            {footerLinks.map(({label, link}) => (
              <li key={label}>
                <a href={link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer