import React from 'react'
import Faq from 'react-faq-component';
import Breadcrums from '../../components/Breadcrums'
const data = {
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: " Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur"
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur"
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
  ]
  }
  


const FAQ = () => {
    return (
        <>
            <Breadcrums path="FAQs" />
            <section className='author-list-section'>
                <div className='container'>
                    <div className="author-list-header">
                        <h1>FAQs</h1>
                    </div>
                    <div className=''>
                    <Faq data={data}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ
