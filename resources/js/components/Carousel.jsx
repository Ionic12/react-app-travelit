import { Carousel } from 'react-carousel-minimal';

function App() {
    const data = [
    {
        image: "img/pass.jpg",
        caption: "Passwang Pass, Mümliswil-Ramiswil, Switzerland"
    },
    {
        image: "img/murren.jpg",
        caption: "Mürren, Lauterbrunnen, Switzerland"
    },
    {
        image: "img/zurich.jpg",
        caption: "Zürich, Switzerland"
    },
    {
        image: "img/wengen.jpg",
        caption: "Wengen, Lauterbrunnen, Switzerland"
    },
    {
        image: "img/oeschinen.jpg",
        caption: "Oeschinen Lake, Kandersteg, Switzerland"
    },
    {
        image: "img/furka.jpg",
        caption: "Furka Pass, Obergoms, Switzerland"
    },
    {
        image: "img/castle.jpg",
        caption: "Oberhofen Castle, Oberhofen, Switzerland"
    },
    {
        image: "img/bunder.jpg",
        caption: "Bunderspitz, Adelboden, Switzerland"
    },
    {
        image: "img/zermatt.jpg",
        caption: "Rotenboden, Zermatt, Switzerland"
    },
    {
        image: "img/bryggen.jpg",
        caption: "Bryggen, Bergen, Norway"
    },
    {
        image: "img/steinsdalsfossen.jpg",
        caption: "Steinsdalsfossen, Norheimsund, Norway"
    },
    {
        image: "img/hamnoy.jpg",
        caption: "Hamnøy, Norway"
    },
    ];
    
    const captionStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
    }
    return (
    <div className="App" id='hero'>
        <div style={{ textAlign: "center" }}>
            <div style={{
                padding: "0 20px"
            }}>
            <Carousel
            data={data}
            time={3000}
            width="1171px"
            height="615px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            
            style={{
                textAlign: "center",
                maxWidth: "1171px",
                maxHeight: "615px",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "40px"
              }}
            />
        </div>
    </div>
</div>
);
}

export default App;