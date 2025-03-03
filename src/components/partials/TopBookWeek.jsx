import Carousel from "./Carousel";
const TopBookWeek = ()=>{
    const topBookWeek = [
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d497fea25116.png',
            title:'Bedouin Village',
            description:'The story begins in a traditional Bedouin village called set in the desert The lives of its inhabitants are disrupted when foreign explorers arrive in search of oil. The first volume vividly portrays the environmental destruction and cultural upheaval caused by the oil industry The narrative expands to examine the generational conflicts, the complex dynamics between rulers and the ruled, and the rapid modernization brought by the oil boom.',
            altText:'Bedouin Village'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d4a751654718.png',
            title:'Morning Talk',
            description:'Morning Talk The story begins in a traditional Bedouin village called set in the desert. The lives of its inhabitants are disrupted when foreign explorers arrive in search of oil. The first volume vividly portrays the environmental destruction and cultural upheaval caused by the oil industry.',
            altText:'Morning Talk'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d4b9f3130321.png',
            title:'The Prince',
            description:'The Prince The Prince The story begins in a traditional Bedouin village called set in the desert. The lives of its inhabitants are disrupted when foreign explorers arrive in search of oil. The first volume vividly portrays the environmental destruction and cultural upheaval caused by the oil industry.',
            altText:'The Prince'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d4b3eb202020.png',
            title:'Men Are from Mars',
            description:'The story begins in a traditional Bedouin village called set in the desert. The lives of its inhabitants are disrupted when foreign explorers arrive in search of oil. The first volume vividly portrays the environmental destruction and cultural upheaval caused by the oil industry The narrative expands to examine the generational conflicts, the complex dynamics between rulers and the ruled, and the rapid modernization brought by the oil boom.',
            altText:'Men Are from Mars'
        },
        {
            imageSrc:'http://bookoe.millionscourse.com/images/677d4ac74a64f19.png',
            title:'The Alchemist',
            description:'The story begins in a traditional Bedouin village called "Wadi Al-Uyoun," set in the desert. The lives of its inhabitants are disrupted when foreign explorers arrive in search of oil. The first volume vividly portrays the environmental destruction and cultural upheaval caused by the oil industry.',
            altText:'The Alchemist'
        },
    ];
    return <>
      <div className="book_week">
        <div className="title">
            <h1>Most Read Books This Week</h1>
        </div>
            <Carousel slides={topBookWeek} items={5}/>
        </div>
    </>
}
export default TopBookWeek;