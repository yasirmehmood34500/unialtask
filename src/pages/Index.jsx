import React, { Component, Fragment } from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
class Index extends Component {
  render() {
    const options = {
      orientation: 'portrait',
      unit: 'in',
      format: [50,20]
  };
    return (
      <Fragment>
        <div ref={ref}>
          <h1>Students</h1>
          <table>
            <tr>
              <th>Name</th>
              <th>Class</th>
            </tr>
            <tr>
              <td>Yasir</td>
              <td>MSCS</td>
            </tr>
          </table>
          <h1>Heading</h1>
          <p style={{textAlign: 'justify'}}>
            Pakistan,[c] officially the Islamic Republic of Pakistan,[d] is a
            country in South Asia. It is the world's fifth-most populous
            country, with a population of almost 227 million, and has the
            world's second-largest Muslim population. Pakistan is the
            33rd-largest country by area, spanning 881,913 square kilometres
            (340,509 square miles). It has a 1,046-kilometre (650-mile)
            coastline along the Arabian Sea and Gulf of Oman in the south, and
            is bordered by India to the east, Afghanistan to the west, Iran to
            the southwest, and China to the northeast. It is separated narrowly
            from Tajikistan by Afghanistan's Wakhan Corridor in the north, and
            also shares a maritime border with Oman. Pakistan is the site of
            several ancient cultures, including the 8,500-year-old Neolithic
            site of Mehrgarh in Balochistan,[13] and the Indus Valley
            Civilisation of the Bronze Age, the most extensive of the
            civilisations of the Afro-Eurasia.[14][15] The region that comprises
            the modern state of Pakistan was the realm of multiple empires and
            dynasties, including the Achaemenid; briefly that of Alexander the
            Great; the Seleucid, the Maurya, the Kushan, the Gupta;[16] the
            Umayyad Caliphate in its southern regions, the Hindu Shahi, the
            Ghaznavids, the Delhi Sultanate, the Mughals,[17] the Durranis, the
            Sikh Empire, British East India Company rule, and most recently, the
            British Indian Empire from 1858 to 1947. Spurred by the Pakistan
            Movement, which sought a homeland for the Muslims of British India,
            and election victories in 1946 by the All-India Muslim League,
            Pakistan gained independence in 1947 after the Partition of the
            British Indian Empire, which awarded separate statehood to its
            Muslim-majority regions and was accompanied by an unparalleled mass
            migration and loss of life.[18] Initially a Dominion of the British
            Commonwealth, Pakistan officially drafted its constitution in 1956,
            and emerged as a declared Islamic republic. In 1971, the exclave of
            East Pakistan seceded as the new country of Bangladesh after a
            nine-month-long civil war. In the following four decades, Pakistan
            has been ruled by governments whose descriptions, although complex,
            commonly alternated between civilian and military, democratic and
            authoritarian, relatively secular and Islamist.[19] Pakistan elected
            a civilian government in 2008, and in 2010 adopted a parliamentary
            system with periodic elections.[20] Pakistan is a
            regional[21][22][23] and middle power nation,[24][25][26] and has
            the world's sixth-largest standing armed forces. It is a declared
            nuclear-weapons state, and is ranked amongst the emerging and
            growth-leading economies,[27] with a large and rapidly-growing
            middle class.[28] Pakistan's political history since independence
            has been characterised by periods of significant economic and
            military growth as well as those of political and economic
            instability. It is an ethnically and linguistically diverse country,
            with similarly diverse geography and wildlife. The country continues
            to face challenges, including poverty, illiteracy, corruption and
            terrorism.[29] Pakistan is a member of the United Nations, the
            Shanghai Cooperation Organisation, the Organisation of Islamic
            Cooperation, the Commonwealth of Nations, the South Asian
            Association for Regional Cooperation, and the Islamic Military
            Counter-Terrorism Coalition, and is designated as a major non-NATO
            ally by the United States.
          </p>
          <img style={{width: '100%', height: '200pxx'}} src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=" alt="" />
          <p style={{textAlign: 'justify'}}>
            Pakistan,[c] officially the Islamic Republic of Pakistan,[d] is a
            country in South Asia. It is the world's fifth-most populous
            country, with a population of almost 227 million, and has the
            world's second-largest Muslim population. Pakistan is the
            33rd-largest country by area, spanning 881,913 square kilometres
            (340,509 square miles). It has a 1,046-kilometre (650-mile)
            coastline along the Arabian Sea and Gulf of Oman in the south, and
            is bordered by India to the east, Afghanistan to the west, Iran to
            the southwest, and China to the northeast. It is separated narrowly
            from Tajikistan by Afghanistan's Wakhan Corridor in the north, and
            also shares a maritime border with Oman. Pakistan is the site of
            several ancient cultures, including the 8,500-year-old Neolithic
            site of Mehrgarh in Balochistan,[13] and the Indus Valley
            Civilisation of the Bronze Age, the most extensive of the
            civilisations of the Afro-Eurasia.[14][15] The region that comprises
            the modern state of Pakistan was the realm of multiple empires and
            dynasties, including the Achaemenid; briefly that of Alexander the
            Great; the Seleucid, the Maurya, the Kushan, the Gupta;[16] the
            Umayyad Caliphate in its southern regions, the Hindu Shahi, the
            Ghaznavids, the Delhi Sultanate, the Mughals,[17] the Durranis, the
            Sikh Empire, British East India Company rule, and most recently, the
            British Indian Empire from 1858 to 1947. Spurred by the Pakistan
            Movement, which sought a homeland for the Muslims of British India,
            and election victories in 1946 by the All-India Muslim League,
            Pakistan gained independence in 1947 after the Partition of the
            British Indian Empire, which awarded separate statehood to its
            Muslim-majority regions and was accompanied by an unparalleled mass
            migration and loss of life.[18] Initially a Dominion of the British
            Commonwealth, Pakistan officially drafted its constitution in 1956,
            and emerged as a declared Islamic republic. In 1971, the exclave of
            East Pakistan seceded as the new country of Bangladesh after a
            nine-month-long civil war. In the following four decades, Pakistan
            has been ruled by governments whose descriptions, although complex,
            commonly alternated between civilian and military, democratic and
            authoritarian, relatively secular and Islamist.[19] Pakistan elected
            a civilian government in 2008, and in 2010 adopted a parliamentary
            system with periodic elections.[20] Pakistan is a
            regional[21][22][23] and middle power nation,[24][25][26] and has
            the world's sixth-largest standing armed forces. It is a declared
            nuclear-weapons state, and is ranked amongst the emerging and
            growth-leading economies,[27] with a large and rapidly-growing
            middle class.[28] Pakistan's political history since independence
            has been characterised by periods of significant economic and
            military growth as well as those of political and economic
            instability. It is an ethnically and linguistically diverse country,
            with similarly diverse geography and wildlife. The country continues
            to face challenges, including poverty, illiteracy, corruption and
            terrorism.[29] Pakistan is a member of the United Nations, the
            Shanghai Cooperation Organisation, the Organisation of Islamic
            Cooperation, the Commonwealth of Nations, the South Asian
            Association for Regional Cooperation, and the Islamic Military
            Counter-Terrorism Coalition, and is designated as a major non-NATO
            ally by the United States.
          </p>
          <img style={{width: '100%', height: '200pxx'}}src="https://media.istockphoto.com/photos/wazir-khan-mosque-lahore-pakistan-picture-id619503842?k=20&m=619503842&s=612x612&w=0&h=yEDq9o-S_WKcIo87_foKa0tB4Q8mMs01aOcDlY9YMis=" alt="" />
          <p style={{textAlign: 'justify'}}>
            Pakistan,[c] officially the Islamic Republic of Pakistan,[d] is a
            country in South Asia. It is the world's fifth-most populous
            country, with a population of almost 227 million, and has the
            world's second-largest Muslim population. Pakistan is the
            33rd-largest country by area, spanning 881,913 square kilometres
            (340,509 square miles). It has a 1,046-kilometre (650-mile)
            coastline along the Arabian Sea and Gulf of Oman in the south, and
            is bordered by India to the east, Afghanistan to the west, Iran to
            the southwest, and China to the northeast. It is separated narrowly
            from Tajikistan by Afghanistan's Wakhan Corridor in the north, and
            also shares a maritime border with Oman. Pakistan is the site of
            several ancient cultures, including the 8,500-year-old Neolithic
            site of Mehrgarh in Balochistan,[13] and the Indus Valley
            Civilisation of the Bronze Age, the most extensive of the
            civilisations of the Afro-Eurasia.[14][15] The region that comprises
            the modern state of Pakistan was the realm of multiple empires and
            dynasties, including the Achaemenid; briefly that of Alexander the
            Great; the Seleucid, the Maurya, the Kushan, the Gupta;[16] the
            Umayyad Caliphate in its southern regions, the Hindu Shahi, the
            Ghaznavids, the Delhi Sultanate, the Mughals,[17] the Durranis, the
            Sikh Empire, British East India Company rule, and most recently, the
            British Indian Empire from 1858 to 1947. Spurred by the Pakistan
            Movement, which sought a homeland for the Muslims of British India,
            and election victories in 1946 by the All-India Muslim League,
            Pakistan gained independence in 1947 after the Partition of the
            British Indian Empire, which awarded separate statehood to its
            Muslim-majority regions and was accompanied by an unparalleled mass
            migration and loss of life.[18] Initially a Dominion of the British
            Commonwealth, Pakistan officially drafted its constitution in 1956,
            and emerged as a declared Islamic republic. In 1971, the exclave of
            East Pakistan seceded as the new country of Bangladesh after a
            nine-month-long civil war. In the following four decades, Pakistan
            has been ruled by governments whose descriptions, although complex,
            commonly alternated between civilian and military, democratic and
            authoritarian, relatively secular and Islamist.[19] Pakistan elected
            a civilian government in 2008, and in 2010 adopted a parliamentary
            system with periodic elections.[20] Pakistan is a
            regional[21][22][23] and middle power nation,[24][25][26] and has
            the world's sixth-largest standing armed forces. It is a declared
            nuclear-weapons state, and is ranked amongst the emerging and
            growth-leading economies,[27] with a large and rapidly-growing
            middle class.[28] Pakistan's political history since independence
            has been characterised by periods of significant economic and
            military growth as well as those of political and economic
            instability. It is an ethnically and linguistically diverse country,
            with similarly diverse geography and wildlife. The country continues
            to face challenges, including poverty, illiteracy, corruption and
            terrorism.[29] Pakistan is a member of the United Nations, the
            Shanghai Cooperation Organisation, the Organisation of Islamic
            Cooperation, the Commonwealth of Nations, the South Asian
            Association for Regional Cooperation, and the Islamic Military
            Counter-Terrorism Coalition, and is designated as a major non-NATO
            ally by the United States.
          </p>
          <img style={{width: '100%', height: '200pxx'}} src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=" alt="" />
        </div>
        <Pdf targetRef={ref} filename="unialpdf.pdf" options={options} >
          {({ toPdf }) => <button onClick={toPdf}>Click File Download</button>}
        </Pdf>
      </Fragment>
    );
  }
}

export default Index;
