import React from 'react'

const Policy = () => {
  return (
    <div className='text-white px-20'>
        <p className='text-2xl '>All Blog Policies:</p><br />
        <ol className='list-decimal ml-6'>
            <li>Privacy Policy: Explains how you collect, handle, and use visitor data, including cookies.</li>
            <li>Terms and Conditions: Defines the rules for using your site, protecting your intellectual property, and setting a binding contract with users.</li>
            <li>Disclaimer: Protects you from legal liability regarding the accuracy of content, crucial if you offer advice or reviews.</li>
            <li>Disclosure/Sponsored Content: Discloses any affiliate links or paid sponsorships, required by FTC guidelines, noting that compensation does not influence content.</li>
            <li>Copyright/Content Policy: Specifies that content belongs to you and outlines rules for if/how others can use your photos or text.</li>
            <li>Comment Policy: Sets expectations for respectful user engagement and reserves the right to remove inappropriate comments.</li>
        </ol>
    </div>
  )
}

export default Policy