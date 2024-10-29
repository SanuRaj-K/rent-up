import { SectionHeaders } from '@/components/section-headers'
import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <section className="  ">
        <div>
          <SectionHeaders
            desc={"No Extra Fees. Friendly Support"}
            title={"30 days money back guarantee"}
            image={"pricing-bg.jpg"}
          />
        </div>
      </section>
    </div>
  )
}

export default PricingPage